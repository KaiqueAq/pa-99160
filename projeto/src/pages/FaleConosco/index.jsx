
import './style.css'


export default function FaleConosco() {
    function handleSubmit(e) {
        e.preventDefault()
        alert("Mensagem enviada!")
    }
    return (
        <section>
            <h1>Fale conosco</h1>
            <p>Tire dúvidas e peça um orçamento sem compromisso.</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >
                        <span>Nome</span>
                        <input type="text" required placeholder='Seu nome' />
                    </label>
                    <label >
                        <span>Email</span>
                        <input type="email" required placeholder='seu@email.com' />
                    </label>
                    <label >
                        <span>Telefone</span>
                        <input type="telefone" required placeholder='(00) 900000-000' />
                    </label>
                </div>


                <label>
                    <span>Assunto</span>
                    <input type="text" required placeholder='Ex.: Abertura de empresa' />
                </label>
                <label>
                    <span>Menssagem</span>
                    <textarea rows="6" required placeholder='Conte-nos um pouco do seu caso.'></textarea>
                </label>
                <button type='submit'>Enviar</button>
            </form>
        </section>
    )
}