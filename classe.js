// Definindo a classe Heroi
class Heroi {
    // Construtor para inicializar as propriedades
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar o ataque
    atacar() {
        // Estrutura de decisão para definir o ataque baseado no tipo do herói
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "não possui ataque definido";
                break;
        }

        // Exibindo a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

// Criando instâncias da classe Heroi
const heroi1 = new Heroi("Edson", 30, "guerreiro");
const heroi2 = new Heroi("Edmar", 45, "mago");
const heroi3 = new Heroi("Edilson", 28, "monge");
const heroi4 = new Heroi("Adónis", 25, "ninja");

// Exibindo os ataques dos heróis
heroi1.atacar();  // guerreiro atacou usando espada
heroi2.atacar();  // mago atacou usando magia
heroi3.atacar();  // monge atacou usando artes marciais
heroi4.atacar();  // ninja atacou usando shuriken
