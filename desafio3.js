class Heroi{
    constructor(nome,tipo){
        this.nome = nome
        this.tipo = tipo
    }
    atacar(){
        console.log( 'o '+ this.nome + '  atacou usando ' + this.tipo )
    
    }
}
let heroi1 = new Heroi('guerreiro', 'espada' )
let heroi2 = new Heroi('mago', 'magia' )
let heroi3 = new Heroi('monge', 'artes marciais' )
let heroi4 = new Heroi('ninja', 'shuriken' )

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()