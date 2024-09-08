// Lista de objetos representando as cartas do jogo, cada par de cartas tem o mesmo 'id' e 'img'.
let dados = [
    { titulo: "papel", id: 1, imagem: "https://img.freepik.com/vetores-gratis/lixo-e-residuos-conjunto-com-papelao-e-papel-realista-isolado_1284-33134.jpg?t=st=1725750600~exp=1725754200~hmac=215b523f99b0be52afcb83568943157ce86d08184d41bc4aa2ecbf1354b20916&w=1380", informacao: "<p> Você sabia?</p><p> O papel, um dos materiais mais utilizados no dia a dia, é produzido principalmente a partir da madeira. A reciclagem do papel economiza água, energia e reduz a necessidade de cortar novas árvores. Para cada 50 kg de papel reciclado, uma árvore é salva! O processo de reciclagem do papel envolve a coleta seletiva, a separação das fibras, a remoção de impurezas e a formação de uma nova pasta de papel.</p>"},

    { titulo: "vidro", id: 2, imagem: "https://img.freepik.com/vetores-gratis/lixeiras-verdes-com-simbolo-de-reciclagem-em-fundo-branco_1308-44679.jpg?t=st=1725751009~exp=1725754609~hmac=53fb9989d224de1cc91e127f7567b73af8e0ae84ff21ac1a1c7988fdbf45ce43&w=1380", informacao: "<p>Você sabia?</p><p>O vidro é um material inerte, ou seja, não se decompõe na natureza. A reciclagem do vidro é um processo simples e eficiente, que pode ser feito infinitamente sem perder suas propriedades originais. Ao reciclar o vidro, economizamos energia, reduzimos a emissão de gases do efeito estufa e diminuímos a extração de matérias-primas.</p>" },    

    { titulo: "metal", id: 4, imagem: "https://img.freepik.com/vetores-gratis/lata-de-lata_107791-4892.jpg?t=st=1725751480~exp=1725755080~hmac=ab31aec8af80114baf361a82b20c3bbb5d6e42a34571782541fa1ba7129e230d&w=1380", informacao: "<p>Você sabia?</p><p>O metal é um material durável e resistente, amplamente utilizado em diversas aplicações. A reciclagem do metal é um processo eficiente e econômico, que permite a recuperação de quase 100% do material. Ao reciclar o metal, economizamos energia, reduzimos a mineração e diminuímos a exploração de recursos naturais.</p>" },

    { titulo: "lixeira", id: 5, imagem: "https://img.freepik.com/vetores-gratis/quatro-caixas-de-classificacao-de-residuos-diferentes_78370-840.jpg?t=st=1725730017~exp=1725733617~hmac=0b228f8aa2ef6484eb697d0abcd1fdfeaf52529a4fc9ffb8be72170a6a27317a&w=1380", informacao: "<p>Você sabia?</p><p>Para facilitar a coleta seletiva e garantir que os materiais sejam reciclados de forma eficiente, as lixeiras são identificadas por cores.</p><p>Cada cor corresponde a um tipo específico de material:</p><p>Azul: Papéis e papelão. Ex.: Jornais, revistas, caixas de papelão, embalagens de papel, entre outros.</p><p>Verde: Vidros. Ex: Garrafas, potes, vidros de alimentos e bebidas em geral.</p><p>Amarelo: Metais. Ex.: Latas de alumínio (refrigerante, cerveja), latas de aço (conservas), tampinhas de metal, entre outros.</p><p>Vermelho: Plásticos. Ex.: Garrafas PET, embalagens plásticas de alimentos, sacolas plásticas, filmes plásticos, etc.</p>" },
    { titulo: "papel", id: 1, imagem: "https://img.freepik.com/vetores-gratis/lixo-e-residuos-conjunto-com-papelao-e-papel-realista-isolado_1284-33134.jpg?t=st=1725750600~exp=1725754200~hmac=215b523f99b0be52afcb83568943157ce86d08184d41bc4aa2ecbf1354b20916&w=1380", informacao: "<p> Você sabia?</p><p> O papel, um dos materiais mais utilizados no dia a dia, é produzido principalmente a partir da madeira. A reciclagem do papel economiza água, energia e reduz a necessidade de cortar novas árvores. Para cada 50 kg de papel reciclado, uma árvore é salva! O processo de reciclagem do papel envolve a coleta seletiva, a separação das fibras, a remoção de impurezas e a formação de uma nova pasta de papel.</p>"}, 
    
    { titulo: "plastico", id: 3, imagem: "https://img.freepik.com/vetores-gratis/ilustracao-de-poluicao-plastica-oceanica-desenhada-a-mao_23-2150364046.jpg?t=st=1725750884~exp=1725754484~hmac=c27dc49f7760a3f5e668db5509cd91dce5a8eaf96d308c0401ff85952c9600b4&w=1380", informacao: "<p>Você sabia?</p><p>O plástico é um material versátil e resistente, mas também um grande vilão ambiental. A produção de plástico consome muita energia e gera diversos tipos de poluição. A reciclagem do plástico é um processo mais complexo do que a reciclagem do papel e do vidro, pois existem diferentes tipos de plástico, cada um com suas características específicas. No entanto, a reciclagem do plástico é fundamental para reduzir a quantidade de lixo nos oceanos e aterros sanitários.</p>" }, 

    { titulo: "vidro", id: 2, imagem: "https://img.freepik.com/vetores-gratis/lixeiras-verdes-com-simbolo-de-reciclagem-em-fundo-branco_1308-44679.jpg?t=st=1725751009~exp=1725754609~hmac=53fb9989d224de1cc91e127f7567b73af8e0ae84ff21ac1a1c7988fdbf45ce43&w=1380", informacao: "<p>Você sabia?</p><p>O vidro é um material inerte, ou seja, não se decompõe na natureza. A reciclagem do vidro é um processo simples e eficiente, que pode ser feito infinitamente sem perder suas propriedades originais. Ao reciclar o vidro, economizamos energia, reduzimos a emissão de gases do efeito estufa e diminuímos a extração de matérias-primas.</p>" },     

    { titulo: "lixeira", id: 5, imagem: "https://img.freepik.com/vetores-gratis/quatro-caixas-de-classificacao-de-residuos-diferentes_78370-840.jpg?t=st=1725730017~exp=1725733617~hmac=0b228f8aa2ef6484eb697d0abcd1fdfeaf52529a4fc9ffb8be72170a6a27317a&w=1380", informacao: "<p>Você sabia?</p><p>Para facilitar a coleta seletiva e garantir que os materiais sejam reciclados de forma eficiente, as lixeiras são identificadas por cores.</p><p>Cada cor corresponde a um tipo específico de material:</p><p>Azul: Papéis e papelão. Ex.: Jornais, revistas, caixas de papelão, embalagens de papel, entre outros.</p><p>Verde: Vidros. Ex: Garrafas, potes, vidros de alimentos e bebidas em geral.</p><p>Amarelo: Metais. Ex.: Latas de alumínio (refrigerante, cerveja), latas de aço (conservas), tampinhas de metal, entre outros.</p><p>Vermelho: Plásticos. Ex.: Garrafas PET, embalagens plásticas de alimentos, sacolas plásticas, filmes plásticos, etc.</p>" },
    
    { titulo: "metal", id: 4, imagem: "https://img.freepik.com/vetores-gratis/lata-de-lata_107791-4892.jpg?t=st=1725751480~exp=1725755080~hmac=ab31aec8af80114baf361a82b20c3bbb5d6e42a34571782541fa1ba7129e230d&w=1380", informacao: "<p>Você sabia?</p><p>O metal é um material durável e resistente, amplamente utilizado em diversas aplicações. A reciclagem do metal é um processo eficiente e econômico, que permite a recuperação de quase 100% do material. Ao reciclar o metal, economizamos energia, reduzimos a mineração e diminuímos a exploração de recursos naturais.</p>" },
    
    { titulo: "papel", id: 1, imagem: "https://img.freepik.com/vetores-gratis/lixo-e-residuos-conjunto-com-papelao-e-papel-realista-isolado_1284-33134.jpg?t=st=1725750600~exp=1725754200~hmac=215b523f99b0be52afcb83568943157ce86d08184d41bc4aa2ecbf1354b20916&w=1380", informacao: "<p> Você sabia?</p><p> O papel, um dos materiais mais utilizados no dia a dia, é produzido principalmente a partir da madeira. A reciclagem do papel economiza água, energia e reduz a necessidade de cortar novas árvores. Para cada 50 kg de papel reciclado, uma árvore é salva! O processo de reciclagem do papel envolve a coleta seletiva, a separação das fibras, a remoção de impurezas e a formação de uma nova pasta de papel.</p>"},

     { titulo: "plastico", id: 3, imagem: "https://img.freepik.com/vetores-gratis/ilustracao-de-poluicao-plastica-oceanica-desenhada-a-mao_23-2150364046.jpg?t=st=1725750884~exp=1725754484~hmac=c27dc49f7760a3f5e668db5509cd91dce5a8eaf96d308c0401ff85952c9600b4&w=1380", informacao: "<p>Você sabia?</p><p>O plástico é um material versátil e resistente, mas também um grande vilão ambiental. A produção de plástico consome muita energia e gera diversos tipos de poluição. A reciclagem do plástico é um processo mais complexo do que a reciclagem do papel e do vidro, pois existem diferentes tipos de plástico, cada um com suas características específicas. No entanto, a reciclagem do plástico é fundamental para reduzir a quantidade de lixo nos oceanos e aterros sanitários.</p>" }, 
     
     { titulo: "vidro", id: 2, imagem: "https://img.freepik.com/vetores-gratis/lixeiras-verdes-com-simbolo-de-reciclagem-em-fundo-branco_1308-44679.jpg?t=st=1725751009~exp=1725754609~hmac=53fb9989d224de1cc91e127f7567b73af8e0ae84ff21ac1a1c7988fdbf45ce43&w=1380", informacao: "<p>Você sabia?</p><p>O vidro é um material inerte, ou seja, não se decompõe na natureza. A reciclagem do vidro é um processo simples e eficiente, que pode ser feito infinitamente sem perder suas propriedades originais. Ao reciclar o vidro, economizamos energia, reduzimos a emissão de gases do efeito estufa e diminuímos a extração de matérias-primas.</p>" }, 

    { titulo: "plastico", id: 3, imagem: "https://img.freepik.com/vetores-gratis/ilustracao-de-poluicao-plastica-oceanica-desenhada-a-mao_23-2150364046.jpg?t=st=1725750884~exp=1725754484~hmac=c27dc49f7760a3f5e668db5509cd91dce5a8eaf96d308c0401ff85952c9600b4&w=1380", informacao: "<p>Você sabia?</p><p>O plástico é um material versátil e resistente, mas também um grande vilão ambiental. A produção de plástico consome muita energia e gera diversos tipos de poluição. A reciclagem do plástico é um processo mais complexo do que a reciclagem do papel e do vidro, pois existem diferentes tipos de plástico, cada um com suas características específicas. No entanto, a reciclagem do plástico é fundamental para reduzir a quantidade de lixo nos oceanos e aterros sanitários.</p>" }, 

    { titulo: "metal", id: 4, imagem: "https://img.freepik.com/vetores-gratis/lata-de-lata_107791-4892.jpg?t=st=1725751480~exp=1725755080~hmac=ab31aec8af80114baf361a82b20c3bbb5d6e42a34571782541fa1ba7129e230d&w=1380", informacao: "<p>Você sabia?</p><p>O metal é um material durável e resistente, amplamente utilizado em diversas aplicações. A reciclagem do metal é um processo eficiente e econômico, que permite a recuperação de quase 100% do material. Ao reciclar o metal, economizamos energia, reduzimos a mineração e diminuímos a exploração de recursos naturais.</p>" },

    { titulo: "vidro", id: 2, imagem: "https://img.freepik.com/vetores-gratis/lixeiras-verdes-com-simbolo-de-reciclagem-em-fundo-branco_1308-44679.jpg?t=st=1725751009~exp=1725754609~hmac=53fb9989d224de1cc91e127f7567b73af8e0ae84ff21ac1a1c7988fdbf45ce43&w=1380", informacao: "<p>Você sabia?</p><p>O vidro é um material inerte, ou seja, não se decompõe na natureza. A reciclagem do vidro é um processo simples e eficiente, que pode ser feito infinitamente sem perder suas propriedades originais. Ao reciclar o vidro, economizamos energia, reduzimos a emissão de gases do efeito estufa e diminuímos a extração de matérias-primas.</p>" },
    
    { titulo: "lixeira", id: 5, imagem: "https://img.freepik.com/vetores-gratis/quatro-caixas-de-classificacao-de-residuos-diferentes_78370-840.jpg?t=st=1725730017~exp=1725733617~hmac=0b228f8aa2ef6484eb697d0abcd1fdfeaf52529a4fc9ffb8be72170a6a27317a&w=1380", informacao: "<p>Você sabia?</p><p>Para facilitar a coleta seletiva e garantir que os materiais sejam reciclados de forma eficiente, as lixeiras são identificadas por cores.</p><p>Cada cor corresponde a um tipo específico de material:</p><p>Azul: Papéis e papelão. Ex.: Jornais, revistas, caixas de papelão, embalagens de papel, entre outros.</p><p>Verde: Vidros. Ex: Garrafas, potes, vidros de alimentos e bebidas em geral.</p><p>Amarelo: Metais. Ex.: Latas de alumínio (refrigerante, cerveja), latas de aço (conservas), tampinhas de metal, entre outros.</p><p>Vermelho: Plásticos. Ex.: Garrafas PET, embalagens plásticas de alimentos, sacolas plásticas, filmes plásticos, etc.</p>" },

    { titulo: "papel", id: 1, imagem: "https://img.freepik.com/vetores-gratis/lixo-e-residuos-conjunto-com-papelao-e-papel-realista-isolado_1284-33134.jpg?t=st=1725750600~exp=1725754200~hmac=215b523f99b0be52afcb83568943157ce86d08184d41bc4aa2ecbf1354b20916&w=1380", informacao: "<p> Você sabia?</p><p> O papel, um dos materiais mais utilizados no dia a dia, é produzido principalmente a partir da madeira. A reciclagem do papel economiza água, energia e reduz a necessidade de cortar novas árvores. Para cada 50 kg de papel reciclado, uma árvore é salva! O processo de reciclagem do papel envolve a coleta seletiva, a separação das fibras, a remoção de impurezas e a formação de uma nova pasta de papel.</p>"},



    { titulo: "plastico", id: 3, imagem: "https://img.freepik.com/vetores-gratis/ilustracao-de-poluicao-plastica-oceanica-desenhada-a-mao_23-2150364046.jpg?t=st=1725750884~exp=1725754484~hmac=c27dc49f7760a3f5e668db5509cd91dce5a8eaf96d308c0401ff85952c9600b4&w=1380", informacao: "<p>Você sabia?</p><p>O plástico é um material versátil e resistente, mas também um grande vilão ambiental. A produção de plástico consome muita energia e gera diversos tipos de poluição. A reciclagem do plástico é um processo mais complexo do que a reciclagem do papel e do vidro, pois existem diferentes tipos de plástico, cada um com suas características específicas. No entanto, a reciclagem do plástico é fundamental para reduzir a quantidade de lixo nos oceanos e aterros sanitários.</p>" },
    

    { titulo: "lixeira", id: 5, imagem: "https://img.freepik.com/vetores-gratis/quatro-caixas-de-classificacao-de-residuos-diferentes_78370-840.jpg?t=st=1725730017~exp=1725733617~hmac=0b228f8aa2ef6484eb697d0abcd1fdfeaf52529a4fc9ffb8be72170a6a27317a&w=1380", informacao: "<p>Você sabia?</p><p>Para facilitar a coleta seletiva e garantir que os materiais sejam reciclados de forma eficiente, as lixeiras são identificadas por cores.</p><p>Cada cor corresponde a um tipo específico de material:</p><p>Azul: Papéis e papelão. Ex.: Jornais, revistas, caixas de papelão, embalagens de papel, entre outros.</p><p>Verde: Vidros. Ex: Garrafas, potes, vidros de alimentos e bebidas em geral.</p><p>Amarelo: Metais. Ex.: Latas de alumínio (refrigerante, cerveja), latas de aço (conservas), tampinhas de metal, entre outros.</p><p>Vermelho: Plásticos. Ex.: Garrafas PET, embalagens plásticas de alimentos, sacolas plásticas, filmes plásticos, etc.</p>" },
    
    { titulo: "metal", id: 4, imagem: "https://img.freepik.com/vetores-gratis/lata-de-lata_107791-4892.jpg?t=st=1725751480~exp=1725755080~hmac=ab31aec8af80114baf361a82b20c3bbb5d6e42a34571782541fa1ba7129e230d&w=1380", informacao: "<p>Você sabia?</p><p>O metal é um material durável e resistente, amplamente utilizado em diversas aplicações. A reciclagem do metal é um processo eficiente e econômico, que permite a recuperação de quase 100% do material. Ao reciclar o metal, economizamos energia, reduzimos a mineração e diminuímos a exploração de recursos naturais.</p>" },
]
