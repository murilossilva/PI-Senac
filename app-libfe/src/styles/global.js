import { createGlobalStyle } from 'styled-components'
import './fonts.css'

const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    };

    NavLink {
        color: white;
    }

    .action-sheet__title-red {
        color: #ff1d1d;
    };

    .do-login__text {
        align-self: flex-start;
    }

    .active, .actived {
        background-color: #ff1d1d !important;
        border: 2px solid #ff1d1d !important;
        color: white !important;
    }

    .timeToSchedule {
        border: 1.5px solid #ff1d1d;
        color: #ff1d1d;
        font-family: 'Eina', sans-serif;
        padding: 0.75rem;
    }

    .imagem-chef__01 {
        height: 60vh;
    }

    .imagem-calendario__home-cliente {
        width: 100%;
    }

    .rec {
        background-color: transparent !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        font-size: 1.25rem !important
    }

    .rec:hover:enabled {
        color: black !important;
    }
    

    .carouselEstablishments {
        border: 1px solid #ff1d1d;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;
        padding: 1rem 0;
    }

    .button-style__imask {
        width: 80%;
        margin-bottom: 1rem;
        border: 1.5px solid #96959d;
        border-radius: 20px;
        padding: 15px 10px
    }

`

export default Global;