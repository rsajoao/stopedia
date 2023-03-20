'use strict';

// eslint-disable-next-line no-undef
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('categories', [
      { name: 'APARELHOS ELETRÔNICOS E GADGETS', theme_id: 1 },
      { name: 'BRINQUEDOS, BRINCADEIRAS E JOGOS DE TABULEIRO', theme_id: 1 },
      { name: 'CATEGORIAS DO STOP', theme_id: 1 },
      { name: 'COISAS FRIAS', theme_id: 1 },
      { name: 'COISAS DE CARNAVAL', theme_id: 1 },
      { name: 'COISAS DE CIRCO E PARQUE DE DIVERSÃO', theme_id: 1 },
      { name: 'COISAS DE FESTA JUNINA', theme_id: 1 },
      { name: 'COISAS DE INVERNO', theme_id: 1 },
      { name: 'COISAS DE NATAL', theme_id: 1 },
      { name: 'COISAS DE VERÃO', theme_id: 1 },
      { name: 'COISAS QUE GERAM BRIGAS', theme_id: 1 },
      { name: 'COISAS QUE MATAM', theme_id: 1 },
      { name: 'CORES', theme_id: 1 },
      { name: 'FABRICANTES DE CARROS', theme_id: 1 },
      { name: 'FERRAMENTAS E UTILITÁRIOS', theme_id: 1 },
      { name: 'MARCAS FAMOSAS', theme_id: 1 },
      { name: 'MATERIAIS ESCOLARES E DE ESCRITÓRIO', theme_id: 1 },
      { name: 'MEIOS DE TRANSPORTE', theme_id: 1 },
      { name: 'MOBÍLIAS', theme_id: 1 },
      { name: 'PEÇAS DE ROUPA E ACESSÓRIOS', theme_id: 1 },
      { name: 'PROFISSÕES', theme_id: 1 },
      { name: 'REMÉDIOS E MEDICAMENTOS', theme_id: 1 },
      { name: 'TOP APLICATIVOS MOBILE', theme_id: 1 },
      { name: 'COISA GRUDENTAS', theme_id: 2 },
      { name: 'COISAS REDONDAS', theme_id: 2 },
      { name: 'COISAS VERDES', theme_id: 2 },
      { name: 'COISAS VERMELHAS', theme_id: 2 },
      { name: 'COISAS VICIANTES', theme_id: 2 },
      { name: 'COISAS DE BANHEIRO', theme_id: 2 },
      { name: 'COISAS DE BEBÊ', theme_id: 2 },
      { name: 'COISAS DE CASAMENTO', theme_id: 2 },
      { name: 'COISAS DE HALLOWEEN', theme_id: 2 },
      { name: 'COISAS QUE GOVERNOS ESCONDEM', theme_id: 2 },
      { name: 'COISAS QUE AS PESSOAS ESCONDEM', theme_id: 2 },
      { name: 'COISAS QUE NÃO DEVERIAM EXISTIR', theme_id: 2 },
      { name: 'COISAS QUE VOCÊ ESPERA', theme_id: 2 },
      { name: 'COISAS QUE VOCÊ NÃO DEVE TOCAR', theme_id: 2 },
      { name: 'COISAS QUE VOCÊ NÃO ENTENDE', theme_id: 2 },
      { name: 'COISAS QUE VOCÊ NÃO PODE LEVAR NO AVIÃO', theme_id: 2 },
      { name: 'FANTASIAS', theme_id: 2 },
      { name: 'MAUS HÁBITOS', theme_id: 2 },
      { name: 'SINTO CHEIRO DE…', theme_id: 2 },
      { name: '1000 MAIORES CIDADES EUROPEIAS', theme_id: 3 },
      { name: 'BILIONÁRIOS', theme_id: 3 },
      { name: 'CAPITAIS DE PAÍSES', theme_id: 3 },
      { name: 'CIDADES BRASILEIRAS', theme_id: 3 },
      { name: 'CIDADES GRANDES', theme_id: 3 },
      { name: 'COMPANHIAS AÉREAS', theme_id: 3 },
      { name: 'DEUSES, SANTOS ETC…', theme_id: 3 },
      { name: 'GANHADORES DO PRÊMIO NOBEL', theme_id: 3 },
      { name: 'IDIOMAS', theme_id: 3 },
      { name: 'INVENTORES E CIENTISTAS FAMOSOS', theme_id: 3 },
      { name: 'MOEDAS DO MUNDO', theme_id: 3 },
      { name: 'MONUMENTOS E PAISAGENS FAMOSOS', theme_id: 3 },
      { name: 'PAÍSES', theme_id: 3 },
      { name: 'PERSONAGENS BÍBLICOS', theme_id: 3 },
      { name: 'PERSONAGENS FOLCLÓRICOS E MITOLÓGICOS', theme_id: 3 },
      { name: 'PESSOAS HISTÓRICAS', theme_id: 3 },
      { name: 'PINTORES FAMOSOS MUNDIALMENTE', theme_id: 3 },
      { name: 'REIS E IMPERADORES MUNDIALMENTE FAMOSOS', theme_id: 3 },
      { name: 'RUAS FAMOSAS MUNDIALMENTE', theme_id: 3 },
      { name: 'TOP 1000 INVENÇÕES FAMOSAS', theme_id: 3 },
      { name: 'ANUNCIANTES DO SUPER BOWL', theme_id: 4 },
      { name: 'ATORES INDICADOS AO OSCAR', theme_id: 4 },
      { name: 'BRASILEIROS FAMOSOS MUNDIALMENTE', theme_id: 4 },
      { name: 'CALÇADA DA FAMA DE HOLLYWOOD', theme_id: 4 },
      { name: 'COISAS DE CHAVES', theme_id: 4 },
      { name: 'DESENHOS E FILMES ANIMADOS', theme_id: 4 },
      { name: 'DIRETORES INDICADOS AO OSCAR', theme_id: 4 },
      { name: 'FAMOSOS QUE MORRERAM JOVENS', theme_id: 4 },
      { name: 'FILMES BRASILEIROS', theme_id: 4 },
      { name: 'FILMES INDICADOS AO OSCAR', theme_id: 4 },
      { name: 'FILMES DE TERROR', theme_id: 4 },
      { name: 'HUMORISTAS FAMOSOS', theme_id: 4 },
      { name: 'MONSTROS E VILÕES FICTÍCIOS', theme_id: 4 },
      { name: 'NOVELAS', theme_id: 4 },
      { name: 'PERSONAGENS DISNEY-PIXAR', theme_id: 4 },
      { name: 'SÉRIES DE TV', theme_id: 4 },
      { name: 'UNIVERSO GAME OF THRONES', theme_id: 4 },
      { name: 'UNIVERSO HARRY POTTER', theme_id: 4 },
      { name: 'UNIVERSO STAR WARS', theme_id: 4 },
      { name: 'ALERGIA A…', theme_id: 5 },
      { name: 'ANIMAIS', theme_id: 5 },
      { name: 'ÁRVORES', theme_id: 5 },
      { name: 'CLIMA', theme_id: 5 },
      { name: 'COISAS EXTINTAS', theme_id: 5 },
      { name: 'COISAS DE ACAMPAMENTO', theme_id: 5 },
      { name: 'COISAS DO ESPAÇO SIDERAL', theme_id: 5 },
      { name: 'DOENÇAS', theme_id: 5 },
      { name: 'ELEMENTOS DA TABELA PERIÓDICA', theme_id: 5 },
      { name: 'FLORES', theme_id: 5 },
      { name: 'INSETOS, ARANHAS ETC…', theme_id: 5 },
      { name: 'MAMÍFEROS', theme_id: 5 },
      { name: 'MINERAIS E PEDRAS PRECIOSAS', theme_id: 5 },
      { name: 'NOMES TÍPICOS DE CACHORRO', theme_id: 5 },
      { name: 'PARTES DO CORPO', theme_id: 5 },
      { name: 'PEIXES', theme_id: 5 },
      { name: 'PÁSSAROS', theme_id: 5 },
      { name: 'RAÇAS DE CACHORRO', theme_id: 5 },
      { name: 'RIOS', theme_id: 5 },
      { name: 'NOMES FEMININOS', theme_id: 6 },
      { name: 'NOMES MASCULINOS', theme_id: 6 },
      { name: 'PALAVRAS TERMINADAS EM "L"', theme_id: 6 },
      { name: 'PALAVRAS COM 4 LETRAS', theme_id: 6 },
      { name: 'PALAVRAS COM "RR"', theme_id: 6 },
      { name: 'PALAVRAS QUE TÊM "X"', theme_id: 6 },
      { name: 'AMANHÃ SERÁ…', theme_id: 7 },
      { name: 'ESSA PESSOA É MINHA…', theme_id: 7 },
      { name: 'ESTOU ME SENTINDO MUITO…', theme_id: 7 },
      { name: 'EU ACREDITO EM…', theme_id: 7 },
      { name: 'EU PERDI MINHA…', theme_id: 7 },
      { name: 'HOJE EU VOU…', theme_id: 7 },
      { name: 'ITENS FEITOS DE…', theme_id: 7 },
      { name: 'MEDO DE…', theme_id: 7 },
      { name: 'MELHORES AMIGOS NUNCA…', theme_id: 7 },
      { name: 'MEU DRAGÃO É…', theme_id: 7 },
      { name: 'MINHA SOGRA É…', theme_id: 7 },
      { name: 'CAMPEÕES DO GRAND SLAM DE TÊNIS', theme_id: 8 },
      { name: 'ESPORTES', theme_id: 8 },
      { name: 'ESTÁDIOS E ARENAS FAMOSAS', theme_id: 8 },
      { name: 'GRANDES CLUBES DE FUTEBOL', theme_id: 8 },
      { name: 'JOGADORES CAMPEÕES DA COPA', theme_id: 8 },
      { name: 'JOGADORES DA NBA', theme_id: 8 },
      { name: 'JOGADORES QUE GANHARAM A CHAMPIONS LEAGUE', theme_id: 8 },
      { name: 'MEDALHISTAS OLÍMPICOS', theme_id: 8 },
      { name: 'CHOCOLATES MARCAS E TIPOS', theme_id: 9 },
      { name: 'COISAS DE GELADEIRA', theme_id: 9 },
      { name: 'COISAS PARA BEBER', theme_id: 9 },
      { name: 'FRUTAS/VERDURAS/LEGUMES', theme_id: 9 },
      { name: 'PIZZA DE…', theme_id: 9 },
      { name: 'QUEIJOS', theme_id: 9 },
      { name: 'SABORES DE SORVETE', theme_id: 9 },
      { name: 'SOBREMESAS', theme_id: 9 },
      { name: 'TEMPEROS E ERVAS', theme_id: 9 },
      { name: 'AUTORES BEST-SELLERS', theme_id: 10 },
      { name: 'BANDAS OU ARTISTAS SOLO', theme_id: 10 },
      { name: 'BRUXAS, VAMPIROS E LOBISOMENS FICTÍCIOS', theme_id: 10 },
      { name: 'COMPOSITORES CLÁSSICOS FAMOSOS', theme_id: 10 },
      { name: 'DUPLAS FAMOSAS', theme_id: 10 },
      { name: 'ESCOLAS DE SAMBA E BLOCOS', theme_id: 10 },
      { name: 'ESTILOS MUSICAIS', theme_id: 10 },
      { name: 'FRANQUIAS MAIS FAMOSAS DE VIDEOGAME', theme_id: 10 },
      { name: 'HOBBIES', theme_id: 10 },
      { name: 'INSTRUMENTOS MUSICAIS', theme_id: 10 },
      { name: 'LIVROS DE TERROR E SUSPENSE', theme_id: 10 },
      { name: 'MÚSICAS DOS BEATLES/STONES', theme_id: 10 },
      { name: 'PERFORMANCES MUSICAIS DO SUPER BOWL', theme_id: 10 },
      { name: 'POKÉMON', theme_id: 10 },
      { name: 'SUPER-HERÓIS', theme_id: 10 },
      { name: 'YOUTUBERS FAMOSOS', theme_id: 10 },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('categories', null, {})
  }
};
