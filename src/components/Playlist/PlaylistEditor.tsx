import { useState, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Playlist, PlaylistItem, MediaContent, WidgetContent } from '../../types';
import { playlistService } from '../../services/playlistService';
import { mediaService } from '../../services/mediaService';
import { toast } from 'react-toastify';

interface PlaylistEditorProps {
    playlist: Playlist;
    onSave: (playlist: Playlist) => void;
}

export const PlaylistEditor = ({ playlist, onSave }: PlaylistEditorProps) => {
    const [items, setItems] = useState<PlaylistItem[]>(playlist.items);
    const [selectedItem, setSelectedItem] = useState<PlaylistItem | null>(null);
    const [uploading, setUploading] = useState(false);

    const handleDragEnd = useCallback(async (result: any) => {
        if (!result.destination) return;

        const newItems = Array.from(items);
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem);

        // Update order numbers
        const updatedItems = newItems.map((item, index) => ({
            ...item,
            order: index
        }));

        setItems(updatedItems);

        try {
            // Atualizar ordem no backend
            await playlistService.updateItemsOrder(playlist.id, updatedItems.map(item => ({
                id: item.id,
                order: item.order
            })));
        } catch (error) {
            toast.error('Erro ao atualizar ordem dos itens');
            console.error(error);
        }
    }, [items, playlist.id]);

    const handleItemClick = (item: PlaylistItem) => {
        setSelectedItem(item);
    };

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            setUploading(true);
            const media = await mediaService.uploadMedia(file);
            
            const newItem: Omit<PlaylistItem, 'id'> = {
                type: media.type as 'video' | 'image',
                content: media,
                duration: media.type === 'video' ? (media.duration || 10) : 10,
                order: items.length,
                transition: {
                    type: 'fade',
                    duration: 500
                }
            };

            const addedItem = await playlistService.addPlaylistItem(playlist.id, newItem);
            setItems(current => [...current, addedItem]);
            toast.success('Mídia adicionada com sucesso!');
        } catch (error) {
            toast.error('Erro ao fazer upload da mídia');
            console.error(error);
        } finally {
            setUploading(false);
        }
    };

    const handleRemoveItem = async (itemId: string) => {
        try {
            await playlistService.removePlaylistItem(playlist.id, itemId);
            setItems(current => current.filter(item => item.id !== itemId));
            if (selectedItem?.id === itemId) {
                setSelectedItem(null);
            }
            toast.success('Item removido com sucesso!');
        } catch (error) {
            toast.error('Erro ao remover item');
            console.error(error);
        }
    };

    const renderItemPreview = (item: PlaylistItem) => {
        const content = item.content as MediaContent | WidgetContent;
        
        if (item.type === 'widget') {
            const widgetContent = content as WidgetContent;
            return (
                <div className="bg-gray-100 p-4 rounded-md">
                    <span className="text-sm font-medium">
                        Widget: {widgetContent.type}
                    </span>
                </div>
            );
        }

        const mediaContent = content as MediaContent;
        return (
            <div className="relative">
                {mediaContent.thumbnail ? (
                    <img
                        src={mediaContent.thumbnail}
                        alt={mediaContent.title}
                        className="w-full h-24 object-cover rounded-md"
                    />
                ) : (
                    <div className="w-full h-24 bg-gray-200 rounded-md flex items-center justify-center">
                        <span className="text-gray-500">{mediaContent.type}</span>
                    </div>
                )}
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    {item.duration}s
                </span>
            </div>
        );
    };

    return (
        <div className="flex gap-6">
            <div className="w-2/3">
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">Playlist: {playlist.name}</h2>
                        <div>
                            <input
                                type="file"
                                accept="image/*,video/*"
                                onChange={handleFileUpload}
                                className="hidden"
                                id="file-upload"
                                disabled={uploading}
                            />
                            <label
                                htmlFor="file-upload"
                                className={`cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ${
                                    uploading ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            >
                                {uploading ? 'Enviando...' : 'Adicionar Mídia'}
                            </label>
                        </div>
                    </div>
                    
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <Droppable droppableId="playlist">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="space-y-3"
                                >
                                    {items.map((item, index) => (
                                        <Draggable
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={`bg-white border rounded-lg p-4 cursor-move hover:border-blue-500 transition-colors ${
                                                        selectedItem?.id === item.id
                                                            ? 'border-blue-500'
                                                            : 'border-gray-200'
                                                    }`}
                                                    onClick={() => handleItemClick(item)}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-32">
                                                            {renderItemPreview(item)}
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="font-medium">
                                                                {(item.content as MediaContent).title || 
                                                                 `Widget: ${(item.content as WidgetContent).type}`}
                                                            </h3>
                                                            <p className="text-sm text-gray-500">
                                                                Duração: {item.duration}s
                                                            </p>
                                                        </div>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleRemoveItem(item.id);
                                                            }}
                                                            className="text-red-600 hover:text-red-800"
                                                        >
                                                            Remover
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>

                    <button
                        onClick={() => onSave({ ...playlist, items })}
                        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Salvar Playlist
                    </button>
                </div>
            </div>

            <div className="w-1/3">
                {selectedItem && (
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-4">Configurações do Item</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Duração (segundos)
                                </label>
                                <input
                                    type="number"
                                    value={selectedItem.duration}
                                    onChange={(e) => {
                                        const newItems = items.map(item =>
                                            item.id === selectedItem.id
                                                ? { ...item, duration: Number(e.target.value) }
                                                : item
                                        );
                                        setItems(newItems);
                                    }}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Transição
                                </label>
                                <select
                                    value={selectedItem.transition.type}
                                    onChange={(e) => {
                                        const newItems = items.map(item =>
                                            item.id === selectedItem.id
                                                ? {
                                                      ...item,
                                                      transition: {
                                                          ...item.transition,
                                                          type: e.target.value as any,
                                                      },
                                                  }
                                                : item
                                        );
                                        setItems(newItems);
                                    }}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option value="none">Nenhuma</option>
                                    <option value="fade">Fade</option>
                                    <option value="slide">Slide</option>
                                    <option value="zoom">Zoom</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
