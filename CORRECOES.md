# Portfólio corrigido

O tema, a foto, os projetos e a configuração de publicação no GitHub Pages foram preservados.

## Alterações
- Links de e-mail e LinkedIn corrigidos conforme os contatos do README.
- Menu móvel com identificação acessível, fechamento por Escape e fundo legível.
- Títulos, contatos e rodapé ajustados para telas pequenas.
- Formulário com rótulos, preenchimento automático, limites de tamanho e rejeição de campos compostos apenas por espaços. Os campos ficam bloqueados durante o envio.
- Português definido no HTML; página 404 traduzida e retorno respeitando o caminho do repositório.
- Correção de TypeScript no texto de apresentação e atualização automática do ano.
- Efeito 3D carregado separadamente, com geometria mais leve, acompanhamento do ponteiro corrigido e proteção contra falhas. Preferência por movimento reduzido respeitada.
- Imagens abaixo da abertura carregadas sob demanda.
- O botão de Gym Rats foi renomeado para Perfil no GitHub: o endereço existente leva ao perfil, e não foi encontrado um repositório público específico com esse nome.

## Como usar
Requisitos: Node.js 20 ou superior e npm.

```sh
npm ci
npm run dev
```

Para gerar e conferir a versão de produção:

```sh
npm run build
npm run preview
```

Acesse o endereço exibido no terminal com o caminho `/PortfolioGabrielBenicio/` na prévia de produção. A pasta `dist` contém a versão compilada.

Para atualizar o seu repositório, copie os arquivos de código para sua cópia local, confira as alterações e envie um commit. Não copie `node_modules` nem `dist` para o Git. O fluxo existente em `.github/workflows` publica ao receber alterações na branch `main`, se o GitHub Pages estiver configurado para GitHub Actions.

## Limites da verificação
A compilação e a verificação TypeScript passaram. Foram conferidos o menu e os links no navegador em tamanhos de celular e computador.

O envio real do EmailJS não foi realizado: a revisão automática de aprovação bloqueou a submissão por poder enviar um e-mail sem autorização. O serviço e o template existentes foram mantidos. Para validar a entrega, envie você mesmo uma mensagem de teste e confira a caixa de entrada e a configuração do template, incluindo `reply_to`.

As dependências e os arquivos de lock foram preservados. O instalador informou 21 alertas de vulnerabilidade na árvore existente; a atualização de dependências exige uma revisão separada. O build também mantém um aviso de tamanho do pacote 3D, agora carregado separadamente.
