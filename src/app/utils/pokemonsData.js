import Swal from 'sweetalert2'

export const getPokemons = async () => {
    try {
        const maxPokemons = 221;
        const URL_API = 'https://pokeapi.co/api/v2/pokemon';
        const response = await fetch(`${URL_API}/?limit=${maxPokemons}`);

        if (response.ok) {
            const data = await response.json();
            data.results.forEach((pokemon, index) => {
                pokemon.id = index + 1;
            });
            return data.results;
        } else {
            Swal.fire({
                title: 'Problema na Api',
                text: 'Estamos com Problemas, volte mais tarde!',
                icon: 'error',
                confirmButtonText: 'Continuar'
              })
        }
    } catch (error) {
        Swal.fire({
            title: 'Url Invalida',
            text: 'Verifique a URL da Api e tente novamente',
            icon: 'question',
            confirmButtonText: 'Continuar'
          })
    }
};
