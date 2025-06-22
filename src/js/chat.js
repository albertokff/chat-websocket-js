class ChatWEbSocket {
    constructor() {
        this.socket = new WebSocket('ws://localhost:8000');
        this.chat = document.getElementById('chat');
        this.messageInput = document.getElementById('message');
        this.sendBtn = document.getElementById('sendBtn');
        this.closeModalBtn = document.getElementById('closeModalBtn')

        this.getModal();
        this.setEventsSocket();
        this.init();
    }

    setEventsSocket() {
        this.socket.onopen = () => {
            console.log('Conectado ao servidor WebSocket');
        }

        this.socket.onmessage = (event) => {
            const msg = document.createElement('div');
            msg.textContent = event.data;
            chat.appendChild(msg);
            chat.scrollTop = chat.scrollHeight;
        };

        this.socket.onclose = () => {
            console.log('Desconectado do servidor');
        }
    }

    init() {
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.closeModalBtn.addEventListener('click', () => this.closeModal());
    }

    getModal() {
        document.getElementById('modal').style.display = 'block';
    }

    closeModal() {
        document.getElementById('modal').style.display = 'none';
    }

    sendMessage() {
        const text = messageInput.value;
        if (text.trim() !== '') {
            socket.send(text);
            messageInput.value = '';
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new ChatWEbSocket();
})