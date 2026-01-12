/**
 * Configuração de Rastreamento (Google Ads) e Links
 * 
 * Centraliza as variáveis de configuração para facilitar alterações futuras.
 */

const SITE_CONFIG = {
    // ID do Google Ads
    googleAdsId: 'AW-17868596508',

    // Link do Grupo do WhatsApp
    whatsappUrl: 'https://chat.whatsapp.com/Bx0GdWTefWX0H2nPw6ON8u'
};

// --- Inicialização do Google Tag (gtag.js) ---
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

// Configura o Google Ads com o ID configurado
gtag('config', SITE_CONFIG.googleAdsId);

// O PageView é automaticamente rastreado pela tag gtag('config')

// --- Configuração dos Botões CTA ---
document.addEventListener('DOMContentLoaded', function () {
    const ctaButtons = document.querySelectorAll('.btn-cta');

    ctaButtons.forEach(button => {
        // 1. Atualiza o link do WhatsApp
        button.href = SITE_CONFIG.whatsappUrl;

        // 2. Configurações típicas de CTA - abre em nova aba
        button.target = '_blank';
        button.rel = 'noopener noreferrer';

        // 3. Adiciona o evento de Lead ao clicar
        button.addEventListener('click', function () {
            // Envia evento de conversão para Google Ads
            gtag('event', 'conversion', {
                'send_to': SITE_CONFIG.googleAdsId,
                'event_category': 'lead',
                'event_label': 'WhatsApp CTA Click'
            });

            // Log para debug (pode ser removido em produção)
            console.log('Lead event tracked (Google Ads)');
        });
    });
});
