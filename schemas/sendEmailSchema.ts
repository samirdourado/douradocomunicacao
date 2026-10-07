import regexTel from "@/utils/phone";
import * as z from "zod";

const sendEmailSchema = z.object({
    name: z.string().min(3, { message: "Insira um nome válido" }),
    phone: z.string().regex(regexTel, { message: "Informe um telefone válido no formato (11) 91234-5678 ou (11) 5555-5555" }),
    email: z.string().email({ message: "Insira um email válido." }),
    text: z.string().min(10, {message: "A mensagem deve ter pelo menos 10 caracteres." }).max(600, { message: "Máximo 600 caracteres" })
})

export default sendEmailSchema;