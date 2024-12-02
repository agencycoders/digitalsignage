import { create } from 'zustand';

export interface ContentItem {
  id: string;
  type: 'video' | 'image' | 'text';
  title: string;
  duration: string;
  thumbnail?: string;
  content?: string;
  dateCreated: string;
}

export interface PlaylistItem {
  id: string;
  title: string;
  itemCount: number;
  duration: string;
  status: 'active' | 'draft' | 'scheduled';
  lastModified: string;
  description?: string;
  items?: string[]; // Array of ContentItem IDs
}

interface ContentStore {
  // Content Library State
  contentItems: ContentItem[];
  addContentItem: (item: Omit<ContentItem, 'id' | 'dateCreated'>) => void;
  updateContentItem: (id: string, item: Partial<ContentItem>) => void;
  deleteContentItem: (id: string) => void;
  
  // Playlists State
  playlists: PlaylistItem[];
  addPlaylist: (playlist: Omit<PlaylistItem, 'id' | 'lastModified' | 'itemCount'>) => void;
  updatePlaylist: (id: string, playlist: Partial<PlaylistItem>) => void;
  deletePlaylist: (id: string) => void;
  addContentToPlaylist: (playlistId: string, contentId: string) => void;
  removeContentFromPlaylist: (playlistId: string, contentId: string) => void;
}

export const useContentStore = create<ContentStore>((set) => ({
  // Initial Content Items
  contentItems: [
    {
      id: '1',
      type: 'video',
      title: 'Vídeo Promocional',
      duration: '0:45',
      dateCreated: '2024-02-20'
    },
    {
      id: '2',
      type: 'image',
      title: 'Banner Produto Novo',
      duration: '10s',
      dateCreated: '2024-02-19'
    },
    {
      id: '3',
      type: 'text',
      title: 'Comunicado Importante',
      content: 'Texto do comunicado importante...',
      duration: '15s',
      dateCreated: '2024-02-18'
    }
  ],

  // Content Items Actions
  addContentItem: (item) =>
    set((state) => ({
      contentItems: [
        ...state.contentItems,
        {
          ...item,
          id: crypto.randomUUID(),
          dateCreated: new Date().toISOString()
        }
      ]
    })),

  updateContentItem: (id, item) =>
    set((state) => ({
      contentItems: state.contentItems.map((content) =>
        content.id === id ? { ...content, ...item } : content
      )
    })),

  deleteContentItem: (id) =>
    set((state) => ({
      contentItems: state.contentItems.filter((item) => item.id !== id)
    })),

  // Initial Playlists
  playlists: [
    {
      id: '1',
      title: 'Conteúdo Principal',
      itemCount: 8,
      duration: '15:00',
      status: 'active',
      lastModified: '2024-02-20',
      items: ['1', '2']
    },
    {
      id: '2',
      title: 'Promoções do Mês',
      itemCount: 5,
      duration: '10:00',
      status: 'scheduled',
      lastModified: '2024-02-19',
      items: ['2', '3']
    },
    {
      id: '3',
      title: 'Comunicados Internos',
      itemCount: 3,
      duration: '5:00',
      status: 'draft',
      lastModified: '2024-02-18',
      items: ['3']
    }
  ],

  // Playlist Actions
  addPlaylist: (playlist) =>
    set((state) => ({
      playlists: [
        ...state.playlists,
        {
          ...playlist,
          id: crypto.randomUUID(),
          lastModified: new Date().toISOString(),
          itemCount: playlist.items?.length || 0
        }
      ]
    })),

  updatePlaylist: (id, playlist) =>
    set((state) => ({
      playlists: state.playlists.map((p) =>
        p.id === id
          ? {
              ...p,
              ...playlist,
              lastModified: new Date().toISOString(),
              itemCount: playlist.items?.length || p.itemCount
            }
          : p
      )
    })),

  deletePlaylist: (id) =>
    set((state) => ({
      playlists: state.playlists.filter((playlist) => playlist.id !== id)
    })),

  addContentToPlaylist: (playlistId, contentId) =>
    set((state) => ({
      playlists: state.playlists.map((playlist) =>
        playlist.id === playlistId
          ? {
              ...playlist,
              items: [...(playlist.items || []), contentId],
              itemCount: (playlist.items?.length || 0) + 1,
              lastModified: new Date().toISOString()
            }
          : playlist
      )
    })),

  removeContentFromPlaylist: (playlistId, contentId) =>
    set((state) => ({
      playlists: state.playlists.map((playlist) =>
        playlist.id === playlistId
          ? {
              ...playlist,
              items: playlist.items?.filter((id) => id !== contentId) || [],
              itemCount: (playlist.items?.length || 1) - 1,
              lastModified: new Date().toISOString()
            }
          : playlist
      )
    }))
}));
