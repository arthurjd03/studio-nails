#  Studio Nails

Aplicação web de agendamento, focada na apresentação de serviços de manicure/pedicure, exibição de portfólio e solicitação de agendamentos via WhatsApp.

> **Status:** Frontend funcional (sem backend/banco de dados no momento).

---

##  Tecnologias e Ferramentas

- **Core:** Next.js 16 (App Router), React 19, TypeScript 5
- **Estilização:** CSS Modules, Lucide React (ícone), Google Fonts (`Playfair Display` & `Great Vibes`)
- **Qualidade & Deploy:** ESLint 9, Vercel

---

##  Funcionalidades

-  **Interface Mobile-First:** Design elegante, responsivo e adaptado para todos os dispositivos.
-  **Catálogo Interativo:** Exibição de serviços com preços, durações e adição ao carrinho com prevenção de duplicados e cálculo automático do total.
-  **Galeria de Fotos:** Portfólio separado por categorias (Mãos e Pés) com visualização em modal.
-  **Agendamento via WhatsApp:** Checkout simples com coleta de dados da cliente, resumo do pedido e geração de mensagem formatada.
-  **SEO & Acessibilidade:** Metadata configurada, Open Graph, suporte à navegação por teclado e navegação suave por âncoras.
-  **Política de Privacidade:** Rota dedicada `/privacy` com aceite obrigatório na solicitação do pedido.

---

## 📁 Estrutura de Arquivos

```text
studio-nails/
├── public/
│   └── images/gallery/       # Mídias e fotos do portfólio
├── src/
│   ├── app/                  # Rotas e páginas (App Router)
│   ├── components/           # Componentes encapsulados com CSS Modules
│   ├── context/              # CartContext (Estado global do pedido)
│   ├── data/                 # Informações estáticas (serviços, horários, contato)
│   ├── hooks/                # Hooks customizados (ex: useScrollReveal)
│   ├── types/                # Definições TypeScript
│   └── utils/                # Formatação e gerador de mensagem do WhatsApp
```
---
## Autor

**Arthur José**

## 📄 Licença

Este projeto foi desenvolvido para o negócio **Studio Nails**. O uso, reprodução ou redistribuição de imagens, identidade visual, informações comerciais e outros conteúdos específicos da marca deve ser autorizado pelos respectivos responsáveis.