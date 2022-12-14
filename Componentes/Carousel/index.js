import { CarouselDepoimentos } from "./carouselDepoimentos.js"

const indicadoresDepoimentos = '[data-carousel-indicadores-depoimentos]'
const proximoDepoimentos = '[data-proximo-depoimentos]'
const anteriorDepoimentos = '[data-anterior-depoimentos]'
const produtosDepoimentos = '[data-lista-depoimentos]'

new CarouselDepoimentos(indicadoresDepoimentos, proximoDepoimentos, anteriorDepoimentos, produtosDepoimentos)


import { Carousel } from "./carouselLinhaTempo.js"

const indicadores = '[data-carousel-indicadores]'
const proximo = '[data-proximo]'
const anterior = '[data-anterior]'
const produtos = '[data-carousel-produtos]'

new Carousel(indicadores, proximo, anterior, produtos)

import { CarouselNoticias } from "./carouselNoticias.js"

const anteriorNoticias = '[data-anterior-noticias]'
const proximoNoticias = '[data-proximo-noticias]'
const listaProdutosNoticias = '[data-lista-noticias]'

new CarouselNoticias(anteriorNoticias, proximoNoticias, listaProdutosNoticias)

import { CarouselBeneficios } from "./carouselBeneficios.js"

const anteriorBeneficios = '[data-anterior-beneficios]'
const proximoBeneficios = '[data-proximo-beneficios]'
const listaProdutosBeneficios = '[data-lista-beneficios]'

new CarouselBeneficios(anteriorBeneficios, proximoBeneficios, listaProdutosBeneficios)