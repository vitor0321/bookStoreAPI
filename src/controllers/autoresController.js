import autores from "../models/Autor.js";

class AutoresController {  

    static listarAutores = (req, res) => {
        autores.find((error, autores) => {
            res.status(200).json(autores)
        })
    }

    static listarAutoresPorId = (req, res) => {
        const id = req.params.id

        autores.findById(id, (err, autores) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do autores não localizado`})
            } else {
                res.status(200).send(autores);
            }
        })
    }

    static cadastrarAutores = (req, res) => {
        let autore = new autores(req.body);

        autore.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} -  falha ao cadastrar autores.`})
            } else {
                res.status(201).send(autore.toJSON())
            }
        })
    }

    static atualizarAutores = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Autores atualizado com sucesso'})
            } else {
                res.status(500).send({message: `${err.message} -  falha ao fazer update do Autores.`})
            }
        })
    }
    
    static excluirAutores = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Autores removido com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

}

export default AutoresController