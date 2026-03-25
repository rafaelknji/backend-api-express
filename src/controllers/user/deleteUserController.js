import { deleteUser } from "../../models/userModel.js"

export  async function deleteUserController(req, res){
     const id = res.params.id

     const result = await deleteUser(+id)

     return res.json({
          message: "Usuário deletado com sucesso!",
          user: result
     })
}