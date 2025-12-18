# SEO Brain - Tema WordPress

Tema WordPress profissional para agência de SEO.

## Instalação

1. Faça o download de todos os arquivos desta pasta
2. Crie uma pasta chamada `seobrain` no diretório `wp-content/themes/` do seu WordPress
3. Cole todos os arquivos dentro da pasta `seobrain`
4. No painel do WordPress, vá em **Aparência > Temas**
5. Ative o tema "SEO Brain"

## Estrutura de Arquivos

```
seobrain/
├── style.css           # Estilos principais + metadados do tema
├── functions.php       # Funções do tema
├── header.php          # Cabeçalho
├── footer.php          # Rodapé
├── front-page.php      # Página inicial (landing page)
├── index.php           # Template principal (blog)
├── single.php          # Post individual
├── page.php            # Página individual
├── assets/
│   └── js/
│       └── main.js     # JavaScript do tema
└── README.md           # Este arquivo
```

## Personalização

### Via Customizer (Aparência > Personalizar)

- **Seção Hero**: Título e descrição da página inicial
- **Informações de Contato**: E-mail, telefone, localização
- **Redes Sociais**: Links do LinkedIn, Instagram e YouTube

### Menus

1. Vá em **Aparência > Menus**
2. Crie um menu e atribua à localização "Menu Principal"
3. Para links âncora (seções da landing page), use URLs como:
   - `#servicos`
   - `#resultados`
   - `#depoimentos`
   - `#contato`

## Formulário de Contato

O tema inclui um formulário de contato funcional que:
- Envia e-mails para o administrador do WordPress
- Possui validação de campos
- Exibe mensagens de sucesso/erro

## Recursos do Tema

- Design responsivo (mobile-first)
- Animações CSS suaves
- Ícones SVG inline (Lucide)
- Formulário de contato integrado
- SEO-friendly
- Suporte a menus personalizados
- Suporte a widgets
- Suporte a logo personalizado
- Suporte a thumbnails de posts

## Requisitos

- WordPress 5.0 ou superior
- PHP 7.4 ou superior

## Licença

GNU General Public License v2 or later
