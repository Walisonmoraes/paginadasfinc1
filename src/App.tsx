import React from 'react';
import './neon.css'; // Importando o CSS para efeito neon

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center h-full w-full" style={{ backgroundImage: "url('/familia.svg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-blue-900/50 backdrop-filter backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Contact Form Section - Overlay */}
      <section id="contact" className="relative z-10 flex-grow py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8 items-center">
            {/* Left side - Casa à Venda */}
            <div className="md:w-5/12 mb-8 md:mb-0 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <img src="/logo.svg" alt="Logo" className="h-24 md:h-32 w-auto" />
              </div>
              <p className="text-xl md:text-2xl text-white mb-8 font-light">Preencha o formulário para entrarmos em contato ou fale conosco diretamente pelo WhatsApp. Estamos prontos para atendê-lo!</p>
              
              <div className="flex justify-center md:justify-start space-x-6 mb-8">
                {/* Ícone de Casa */}
                <div className="bg-blue-900/30 backdrop-blur-md py-3 px-3 rounded-full text-blue-300 flex items-center justify-center border border-blue-500/20 shadow-lg w-12 h-12">
                  <i className="fas fa-home text-xl"></i>
                </div>
                {/* Ícone de Carro */}
                <div className="bg-blue-900/30 backdrop-blur-md py-3 px-3 rounded-full text-blue-300 flex items-center justify-center border border-blue-500/20 shadow-lg w-12 h-12">
                  <i className="fas fa-car text-xl"></i>
                </div>
                {/* Ícone de Barco */}
                <div className="bg-blue-900/30 backdrop-blur-md py-3 px-3 rounded-full text-blue-300 flex items-center justify-center border border-blue-500/20 shadow-lg w-12 h-12">
                  <i className="fas fa-ship text-xl"></i>
                </div>
              </div>
              
              <div className="hidden md:block">
                <a href="https://wa.me/556520180194?text=Oi%2C%20vi%20o%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais." target="_blank" rel="noopener noreferrer" className="btn-modern bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-green-500/30 transition duration-300 transform hover:scale-105 inline-flex items-center justify-center border border-green-400/30 glow-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-2 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
            
            {/* Right side - Form */}
            <div className="md:w-7/12">
              {/* Título do formulário removido */}
              
              <div className="bg-gray-900/80 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-blue-500/30 mb-8">
                {/* Subtítulo "Agende uma visita" removido */}
                

                
                <form 
                  className="space-y-6" 
                  action="https://formsubmit.co/atendimento@fincconsorcio.com" 
                  method="POST"
                  onSubmit={(e) => {
                    // Não precisamos mais prevenir o comportamento padrão
                    // pois queremos que o formulário seja enviado normalmente
                    const form = e.currentTarget;
                    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                    if (submitBtn) {
                      submitBtn.disabled = true;
                      submitBtn.innerHTML = '<svg class="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Enviando...';
                    }
                  }}
                >
                  {/* Campos ocultos para configuração do FormSubmit */}
                  <input type="hidden" name="_subject" value="Lead do site imobiliário" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={window.location.href} />
                
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-blue-300 font-medium text-sm uppercase tracking-wider">Nome</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          className="w-full pl-10 pr-4 py-3 bg-gray-900/80 text-white border border-blue-500/30 rounded-lg focus:ring-blue-400 focus:border-blue-400 transition-colors placeholder-gray-500" 
                          placeholder="Seu nome completo" 
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-blue-300 font-medium text-sm uppercase tracking-wider">Email</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          className="w-full pl-10 pr-4 py-3 bg-gray-900/80 text-white border border-blue-500/30 rounded-lg focus:ring-blue-400 focus:border-blue-400 transition-colors placeholder-gray-500" 
                          placeholder="seuemail@exemplo.com" 
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-blue-300 font-medium text-sm uppercase tracking-wider">Telefone</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="w-full pl-10 pr-4 py-3 bg-gray-900/80 text-white border border-blue-500/30 rounded-lg focus:ring-blue-400 focus:border-blue-400 transition-colors placeholder-gray-500" 
                        placeholder="(XX) XXXXX-XXXX" 
                        pattern="\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}" 
                        title="Digite o telefone no formato: (XX) XXXXX-XXXX" 
                        required
                        onInput={(e) => {
                          const input = e.target as HTMLInputElement;
                          let value = input.value.replace(/\D/g, '');
                          if (value.length > 0) {
                            value = '(' + value;
                            if (value.length > 3) {
                              value = value.substring(0, 3) + ') ' + value.substring(3);
                            }
                            if (value.length > 10) {
                              value = value.substring(0, 10) + '-' + value.substring(10, 14);
                            }
                          }
                          input.value = value;
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-blue-300 font-medium text-sm uppercase tracking-wider">Mensagem</label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={4} 
                        className="w-full pl-10 pr-4 py-3 bg-gray-900/80 text-white border border-blue-500/30 rounded-lg focus:ring-blue-400 focus:border-blue-400 transition-colors placeholder-gray-500" 
                        placeholder="Escreva sua mensagem ou dúvida aqui..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-blue-500/30 transition duration-300 transform hover:scale-[1.02] flex items-center justify-center border border-blue-300/30 glow-blue-500"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Removido o botão de WhatsApp daqui - será adicionado na parte inferior da tela */}

            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative mt-auto bg-gradient-to-r from-gray-900/80 to-blue-900/80 backdrop-blur-md text-white py-8 border-t border-blue-500/20 shadow-xl z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-16 lg:gap-24">
            <div className="text-center w-full">
              <p className="text-blue-200 text-base">&copy; {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Finc Consórcios</span>. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
      {/* Botão de WhatsApp flutuante e redondo para mobile */}
      <div className="fixed bottom-24 right-6 z-50 md:hidden">
        <a 
          href="https://wa.me/556520180194?text=Oi%2C%20vi%20o%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-modern bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold flex items-center justify-center rounded-full shadow-xl shadow-green-500/30 transition duration-300 transform hover:scale-105 border border-green-400/30 glow-green-500 w-16 h-16"
          aria-label="Contato via WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-9 w-9 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
