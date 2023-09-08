function Enviar() {
    const btnSubmit = document.getElementById('btn_submit');
    btnSubmit.addEventListener('click', (e) => {
        const nome = document.getElementById('user_name');
        const email = document.getElementById('user_email');
        const dtNasc = document.getElementById('dt_nasc');
        const telFixo = document.getElementById('tel_fixo');
        const telCel = document.getElementById('tel_cel');
        
        const checkSelected = () => {
            checkboxes = document.querySelectorAll('input[type="checkbox"]');
            for (let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    return checkboxes[i].value; 
                }
            }
        }

        if(checkSelected[i].value == "Professor") {
            
        }
    })
}




const btn = document.getElementById('btn_submit');


validarTipoUsuario(check);

function validarTipoUsuario(check) {
    if(check == "Professor") {
        console.log("Professor selecionado")
        check.value = new Professor(); 
        check.nome = this.nome; 
        check.sobrenome =  this.sobrenome; 
        check.email = this.email;
        check.data_nascimento = this.data_nascimento;
        check.nomeCompleto();
        check.area_atuacao = this.area_atuacao; 
        check.link_lattes = this.Latter
    } else {
        console.log("Aluno selecionado")

    }
}


class Pessoa {
     
    constructor(nome, sobrenome, email, data_nascimento,nomeCompleto) {
        if (nome === undefined) {
            throw new Error("O nome é obrigatório");
          } else {
            this.nome = nome;
          }
        this.sobrenome = sobrenome;
        this.email = email; 
        this.data_nascimento = data_nascimento; 
    }

    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

class Aluno  extends Pessoa {
    constructor(curso) {
        this.curso = curso; 
    }
}

class Professor extends Pessoa {
    constructor(area_atuacao,link_lattes) {
        this.area_atuacao = area_atuacao; 
        this.link_lattes = link_lattes; 
    }
}