import Swal from 'sweetalert2'

export const getPokemon = async (id) => {
    try {
        const URL_API = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await fetch(URL_API);

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            Swal.fire({
                title: 'Problema na Api',
                text: 'Estamos com Problemas, volte mais tarde!',
                icon: 'error',
                confirmButtonText: 'Continuar'
              })
        }
    } catch (error) {
       
    }
};
