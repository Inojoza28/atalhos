// Lista de atalhos organizados por categorias
const shortcuts = {
    vscode: [
      { command: "Ctrl + P", description: "Abrir arquivos rapidamente" },
      { command: "Ctrl + Shift + P", description: "Abrir a paleta de comandos" },
      { command: "Alt + Click", description: "Adicionar múltiplos cursores" },
      { command: "Ctrl + /", description: "Comentar/descomentar linha" },
      { command: "Ctrl + B", description: "Alternar a barra lateral" },
      { command: "Ctrl + K, Ctrl + S", description: "Abrir a lista de atalhos" },
      { command: "Ctrl + Shift + N", description: "Abrir uma nova janela" },
      { command: "Ctrl + W", description: "Fechar o editor atual" },
      { command: "Ctrl + Shift + T", description: "Reabrir editor fechado" },
      { command: "Ctrl + D", description: "Selecionar próxima ocorrência" },
      { command: "Ctrl + F", description: "Abrir a busca no arquivo atual" },
      { command: "Ctrl + H", description: "Substituir texto no arquivo atual" },
      { command: "Ctrl + T", description: "Navegar rapidamente para símbolos no projeto" },
      { command: "F12", description: "Ir para a definição de uma função ou variável" },
      { command: "Ctrl + Shift + F", description: "Buscar em todo o projeto" },
      { command: "Ctrl + K, Ctrl + C", description: "Comentar bloco selecionado" },
      { command: "Ctrl + K, Ctrl + U", description: "Descomentar bloco selecionado" },
      { command: "Ctrl + L", description: "Selecionar a linha atual" },
      { command: "Ctrl + Shift + Alt + seta para baixo", description: "Copiar linha para baixo" },
      { command: "Ctrl + Shift + Alt + seta para cima", description: "Copiar linha para cima" },
    ],
    git: [
      { command: "git init", description: "Inicializar um repositório Git" },
      { command: "git clone [url]", description: "Clonar um repositório" },
      { command: "git status", description: "Verificar o status do repositório" },
      { command: "git add .", description: "Adicionar todos os arquivos ao staging" },
      { command: "git commit -m 'mensagem'", description: "Criar um commit com mensagem" },
      { command: "git log", description: "Ver o histórico de commits" },
      { command: "git checkout -b [branch]", description: "Criar e mudar para uma nova branch" },
      { command: "git branch", description: "Listar todas as branches" },
      { command: "git push", description: "Enviar mudanças para o repositório remoto" },
      { command: "git pull", description: "Atualizar o repositório local" },
      { command: "git merge [branch]", description: "Mesclar uma branch com a atual" },
      { command: "git reset --hard", description: "Reverter todas as mudanças no repositório local" },
      { command: "git stash", description: "Salvar alterações temporariamente" },
      { command: "git stash pop", description: "Aplicar alterações salvas no stash" },
      { command: "git diff", description: "Exibir as diferenças nos arquivos" },
    ],
    terminal: [
      { command: "Ctrl + C", description: "Interromper o comando atual" },
      { command: "Ctrl + L", description: "Limpar o terminal" },
      { command: "cd [path]", description: "Navegar para um diretório" },
      { command: "ls", description: "Listar arquivos no diretório atual" },
      { command: "pwd", description: "Exibir o caminho do diretório atual" },
      { command: "mkdir [nome]", description: "Criar um novo diretório" },
      { command: "rmdir [nome]", description: "Remover um diretório vazio" },
      { command: "rm -rf [dir]", description: "Remover diretório de forma recursiva" },
      { command: "touch [file]", description: "Criar um novo arquivo vazio" },
      { command: "echo 'texto'", description: "Imprimir texto no terminal" },
      { command: "cat [file]", description: "Exibir o conteúdo de um arquivo" },
      { command: "grep [texto] [arquivo]", description: "Procurar texto em um arquivo" },
      { command: "nano [file]", description: "Abrir um arquivo no editor Nano" },
      { command: "history", description: "Exibir o histórico de comandos" },
      { command: "exit", description: "Fechar o terminal" },
    ],
    system: [
      { command: "Ctrl + C", description: "Copiar" },
      { command: "Ctrl + V", description: "Colar" },
      { command: "Ctrl + X", description: "Recortar" },
      { command: "Ctrl + Z", description: "Desfazer a última ação" },
      { command: "Ctrl + Y", description: "Refazer a ação desfeita" },
      { command: "Alt + Tab", description: "Alternar entre janelas abertas" },
      { command: "Win + D", description: "Mostrar a área de trabalho" },
      { command: "Ctrl + Shift + Esc", description: "Abrir o Gerenciador de Tarefas" },
      { command: "Win + R", description: "Abrir a janela 'Executar'" },
      { command: "Win + L", description: "Bloquear a tela do computador" },
      { command: "Win + E", description: "Abrir o Explorador de Arquivos" },
      { command: "Win + seta para esquerda/direita", description: "Mover janela para um lado da tela" },
      { command: "Win + seta para cima/baixo", description: "Maximizar ou minimizar janela" },
      { command: "Win + [número]", description: "Abrir o aplicativo fixado na barra de tarefas" },
      { command: "Shift + Delete", description: "Excluir permanentemente sem ir para a Lixeira" },
    ],
  };
  
  // Função para carregar atalhos por categoria
  function loadShortcuts() {
    const categories = ["vscode", "git", "terminal", "system"];
  
    categories.forEach(category => {
      const listElement = document.getElementById(`${category}-list`);
      if (!listElement) {
        console.error(`Elemento com ID ${category}-list não encontrado.`);
        return;
      }
  
      listElement.innerHTML = ""; // Limpa a lista antes de carregar os atalhos
  
      shortcuts[category].forEach(shortcut => {
        const div = createShortcutElement(shortcut.command, shortcut.description);
        listElement.appendChild(div);
      });
    });
  }

  // Função para alternar entre as abas
function switchTab(tabId) {
    // Seleciona todas as abas e conteúdos
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");
  
    // Remove a classe 'active' de todas as abas e conteúdos
    tabs.forEach(tab => tab.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));
  
    // Adiciona a classe 'active' à aba e ao conteúdo selecionados
    document.querySelector(`.tab[onclick="switchTab('${tabId}')"]`).classList.add("active");
    document.getElementById(tabId).classList.add("active");
  }
  
  
  // Função para criar um elemento de atalho
  function createShortcutElement(command, description) {
    const div = document.createElement("div");
    div.classList.add("shortcut-item");
    div.innerHTML = `
      <span><strong>${command}</strong> - ${description}</span>
      <button onclick="addToFavorites('${command}', '${description}')">
        <i class="fas fa-star"></i>
      </button>
    `;
    return div;
  }
  
// Função para adicionar atalhos aos favoritos com notificação
function addToFavorites(command, description) {
    const favoritesList = document.getElementById("favorites-list");
    const existing = Array.from(favoritesList.children).some(div =>
        div.textContent.includes(command)
    );

    if (existing) {
        showNotification("Este atalho já está nos favoritos.", "error");
        return;
    }

    const div = document.createElement("div");
    div.classList.add("favorite-item");
    div.innerHTML = `
      <span><strong>${command}</strong> - ${description}</span>
      <button onclick="removeFromFavorites(this)"><i class="fas fa-trash"></i></button>
    `;
    favoritesList.appendChild(div);

    saveFavorites();
    showNotification("Atalho adicionado aos favoritos!", "success");
}

// Função para exibir notificações
function showNotification(message, type = "success") {
    const notification = document.createElement("div");
    notification.classList.add("notification", type);
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remover a notificação automaticamente após 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

  
  // Função para remover atalhos dos favoritos
  function removeFromFavorites(button) {
    const div = button.parentElement;
    div.remove();
    saveFavorites();
  }
  
  // Função para salvar favoritos no LocalStorage
  function saveFavorites() {
    const favoritesList = document.getElementById("favorites-list");
    const favorites = Array.from(favoritesList.children).map(div => {
      const [command, description] = div.textContent.split(" - ");
      return { command: command.trim(), description: description.trim() };
    });
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  
  // Função para carregar favoritos do LocalStorage
  function loadFavorites() {
    const favoritesList = document.getElementById("favorites-list");
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favoritesList.innerHTML = ""; // Limpa antes de carregar
    favorites.forEach(favorite => {
      const div = document.createElement("div");
      div.classList.add("favorite-item");
      div.innerHTML = `
        <span><strong>${favorite.command}</strong> - ${favorite.description}</span>
        <button onclick="removeFromFavorites(this)"><i class="fas fa-trash"></i></button>
      `;
      favoritesList.appendChild(div);
    });
  }
  
  // Função para alternar o modal de favoritos
  function toggleFavorites() {
    const modal = document.getElementById("favorites-modal");
    modal.classList.toggle("hidden");
  }
  
  // Função para pesquisa dinâmica
  const searchInput = document.getElementById("search");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const filter = this.value.toLowerCase().trim();
      const categories = ["vscode", "git", "terminal", "system"];
  
      categories.forEach(category => {
        const list = document.getElementById(`${category}-list`);
        list.innerHTML = ""; // Limpa a lista antes de filtrar
        shortcuts[category]
          .filter(shortcut =>
            shortcut.command.toLowerCase().includes(filter) ||
            shortcut.description.toLowerCase().includes(filter)
          )
          .forEach(shortcut => {
            const div = createShortcutElement(shortcut.command, shortcut.description);
            list.appendChild(div);
          });
  
        // Caso não haja resultados
        if (list.children.length === 0) {
          list.innerHTML = "<p>Nenhum atalho encontrado.</p>";
        }
      });
    });
  }
  
  // Inicialização
  document.addEventListener("DOMContentLoaded", () => {
    loadShortcuts();
    loadFavorites();
  });
  