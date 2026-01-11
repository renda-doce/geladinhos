/**
 * Configuração de Rastreamento (Meta Pixel) e Links
 * 
 * Centraliza as variáveis de configuração para facilitar alterações futuras.
 */

const SITE_CONFIG = {
    // ID do Pixel da Meta
    pixelId: '324230336566459',
    
    // Link do Grupo do WhatsApp
    whatsappUrl: 'https://chat.whatsapp.com/Bx0GdWTefWX0H2nPw6ON8u'
};

// --- Inicialização do Meta Pixel ---
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

// Inicia o Pixel com o ID configurado
fbq('init', SITE_CONFIG.pixelId);

// Dispara o evento de PageView (Visualização de Página)
fbq('track', 'PageView');

// --- Configuração dos Botões CTA ---
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn-cta');

    ctaButtons.forEach(button => {
        // 1. Atualiza o link do WhatsApp
        button.href = SITE_CONFIG.whatsappUrl;
        
        // Garante que abra em nova aba (opcional, mas recomendado para não perder tracking)
        // button.target = '_blank'; 

        // 2. Adiciona o evento de Lead ao clicar
        button.addEventListener('click', function() {
            fbq('track', 'Lead');
            // Log para debug (pode ser removido em produção)
            console.log('Lead event tracked');
        });
    });
});
