import React, {useState} from 'react';
import Navbar from './components/home/navbar';
import Header from './components/home/header';
import Footer from './components/home/footer';
import Welcome from './components/home/welcome';
import Porfolio from './components/home/porfolio';
import Modernbusiness from './components/home/modernbusiness';
import Action from './components/home/action';

const Home = props => {
    const [state, setState] = useState ({
        galery: [
            {
                id: 1, 
                image: "https://i.picsum.photos/id/329/1900/1090.jpg?blur=2", 
                title: "first Slide",
                description: "this is a description for the first slide",
            },
            {
                id: 2, image: "https://i.picsum.photos/id/339/1900/1090.jpg?blur=2", 
                title: "second Slide",
                description: "this is a description for the second slide",
            },
            {
                id: 3, image: "https://i.picsum.photos/id/319/1900/1090.jpg?blur=2", 
                title: "third Slide",
                description: "this is a description for the third slide",
            },
        ],
        welcomeInfo: {
            title: 'Welcome to Modern Business', // titulo del card//
            cardInfo: [
                {
                    id: 1,
                    title: "card title",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
                    button: {
                        label: "Learn more",
                        url: "/#"
                    }
                },
                {
                    id: 2,
                    title: "card title",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
                    button: {
                        label: "Learn more",
                        url: "/#"
                    }
                },
                {
                    id: 3,
                    title: "card title",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
                    button: {
                        label: "Learn more",
                        url: "/#"
                    }
                }
            ]
        },
        portfolioInfo: {
            title: 'Portfolio Heading', // titulo del porfolio//
            portafInfo: [
                {
                    pImagen: "https://i.picsum.photos/id/319/700/400.jpg?blur=2",
                    pTitulo: "first",
                    pDescrip: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
                },
                {
                    pImagen: "https://i.picsum.photos/id/339/700/400.jpg?blur=2",
                    pTitulo: "second card",
                    pDescrip: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
                },
                {
                    pImagen: "https://i.picsum.photos/id/329/700/400.jpg?blur=2",
                    pTitulo: "third card",
                    pDescrip: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
                },
            ]
        },

        modernBusinessInfo: {
            mTitle: "Modern Business Features",
            descrip: "The Modern Business template by Start Bootstrap includes:",
            mBInfo:{
                lista1:"Bootstrap v4",
                lista2: "jQuery",
                lista3: "Font Awesome",
                lista4: "Working contact form with validation",
                lista5: "Unstyled page elements for easy customization"
            },
            descrip2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.",
            mImagen: "https://i.picsum.photos/id/319/700/450.jpg?blur=2"
        }

    })
        //es necesario linkear en el return con la info de arriba//
    return (
        <>
            <Navbar />
            <Header slide= {state.galery}/> 
            <div className="container">
                <Welcome info={state.welcomeInfo} />
                <Porfolio portfolio={state.portfolioInfo} />
                <Modernbusiness mbusiness={state.modernBusinessInfo}/>

                <hr />
                <Action />
            </div>
            <Footer />
        </>
    )
}
export default Home;
