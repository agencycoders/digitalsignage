import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface PlanDetails {
  name: string;
  price: string;
  tvCount: number;
}

export const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const planName = searchParams.get('plan');
  const planPrice = searchParams.get('price');

  // Se não houver plano selecionado, redireciona para a página de planos
  if (!planName || !planPrice) {
    navigate('/planos');
    return null;
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    nif: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Formatação específica para campos
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim().slice(0, 19);
    } else if (name === 'cardExpiry') {
      formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .slice(0, 5);
    } else if (name === 'cardCvc') {
      formattedValue = value.replace(/\D/g, '').slice(0, 3);
    } else if (name === 'postalCode') {
      formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .slice(0, 8);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Aqui você implementaria a integração com o gateway de pagamento
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulação
      navigate('/dashboard');
    } catch (err) {
      setError('Ocorreu um erro ao processar o pagamento. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-[var(--header-height)]">
      <div className="container-fluid py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Formulário de Checkout */}
            <div className="md:col-span-2">
              <div className="card p-8">
                <h1 className="text-2xl font-bold mb-6">Finalizar Compra</h1>

                {error && (
                  <div className="bg-red-500/10 text-red-500 p-4 rounded-lg mb-6">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Informações Pessoais */}
                    <div>
                      <h2 className="text-lg font-semibold mb-4">Informações Pessoais</h2>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-2">Nome</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="input w-full"
                            required
                          />
                        </div>
                        <div>
                          <label className="block mb-2">Sobrenome</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="input w-full"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Informações da Empresa */}
                    <div>
                      <h2 className="text-lg font-semibold mb-4">Informações da Empresa</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block mb-2">Nome da Empresa</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="input w-full"
                            required
                          />
                        </div>
                        <div>
                          <label className="block mb-2">NIF</label>
                          <input
                            type="text"
                            name="nif"
                            value={formData.nif}
                            onChange={handleInputChange}
                            className="input w-full"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Endereço */}
                    <div>
                      <h2 className="text-lg font-semibold mb-4">Endereço</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block mb-2">Morada</label>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="input w-full"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block mb-2">Cidade</label>
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              className="input w-full"
                              required
                            />
                          </div>
                          <div>
                            <label className="block mb-2">Código Postal</label>
                            <input
                              type="text"
                              name="postalCode"
                              value={formData.postalCode}
                              onChange={handleInputChange}
                              className="input w-full"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Informações de Pagamento */}
                    <div>
                      <h2 className="text-lg font-semibold mb-4">Informações de Pagamento</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block mb-2">Número do Cartão</label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            className="input w-full"
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block mb-2">Data de Validade</label>
                            <input
                              type="text"
                              name="cardExpiry"
                              value={formData.cardExpiry}
                              onChange={handleInputChange}
                              className="input w-full"
                              placeholder="MM/AA"
                              required
                            />
                          </div>
                          <div>
                            <label className="block mb-2">CVC</label>
                            <input
                              type="text"
                              name="cardCvc"
                              value={formData.cardCvc}
                              onChange={handleInputChange}
                              className="input w-full"
                              placeholder="123"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full mt-8"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Processando...' : 'Finalizar Compra'}
                  </button>
                </form>
              </div>
            </div>

            {/* Resumo do Pedido */}
            <div>
              <div className="card p-6 sticky top-[calc(var(--header-height)+2rem)]">
                <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <span>{planName}</span>
                    <span className="font-bold">{planPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span className="gradient-text">{planPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
