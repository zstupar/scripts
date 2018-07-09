Vue.filter('currency', function(value) {
  return 'RSD ' + value;
});

var app = new Vue ({
  el: "#main",
  data: {
    hematoloskeanalize: [
      {
        name: 'KKS',
        price: 20000,
        active: false
      },
      {
        name: 'Sedimentacija 1h',
        price: 110,
        active: false
      },
      {
        name: 'Leukociti',
        price: 100,
        active: false
      },
      {
        name: 'Trombociti',
        price: 100,
        active: false
      },
      {
        name: 'Retikulociti',
        price: 150,
        active: false
      },
      {
        name: 'Leukocitarna formula',
        price: 150,
        active: false
      },
      {
        name: 'Subpopulacija limfocita',
        price: 4800,
        active: false
      },
      {
        name: 'T-limfociti (CD4+)',
        price: 4300,
        active: false
      },
      {
        name: 'NK Ćelije',
        price: 4500,
        active: false
      }
    ],
    metabolizamgvozdjaianemija: [
      {
        name: 'Gvožđe',
        price: 200,
        active: false
      },
      {
        name: 'Ukupan kapacitet gvožđa (TIBC) + nezasićen kapacitet gvožđa (UIBC)',
        price: 590,
        active: false
      },
      {
        name: 'Transferin',
        price: 900,
        active: false
      },
      {
        name: 'Feritin',
        price: 1000,
        active: false
      },
      {
        name: 'Vitamin B12',
        price: 1000,
        active: false
      },
      {
        name: 'Folna kiselina',
        price: 1000,
        active: false
      },
      {
        name: 'TOO-Fe',
        price: 500,
        active: false
      },
      {
        name: 'Holotranskobalamin (Aktivni vitamin B12)',
        price: 2300,
        active: false
      }
    ],
    analizeurina: [
      {
        name: 'Pregled urina',
        price: 250,
        active: false
      },
      {
        name: 'Kreatinin klirens (24h urin)',
        price: 400,
        active: false
      },
      {
        name: 'Proteinurija (24h urin)',
        price: 300,
        active: false
      },
      {
        name: 'Test na trudnoću',
        price: 420,
        active: false
      },
      {
        name: 'Acidum uricum - prvi jut. urin',
        price: 120,
        active: false
      },
      {
        name: 'Acidum uricum - 24h urin',
        price: 120,
        active: false
      },
      {
        name: 'Urea - prvi jut. urin',
        price: 120,
        active: false
      },
      {
        name: 'Urea - 24h urin',
        price: 120,
        active: false
      },
      {
        name: 'Kreatinin - prvi jut. urin',
        price: 120,
        active: false
      },
      {
        name: 'Kreatinin - 24h urin',
        price: 120,
        active: false
      },
      {
        name: 'Mikroalbumini u 24h urinu',
        price: 1200,
        active: false
      },
      {
        name: 'Noradrenalin u 24h urinu',
        price: 1650,
        active: false
      },
      {
        name: 'Normetanefrin-24h urin',
        price: 3900,
        active: false
      },
      {
        name: 'Uroporfirini-24h urin',
        price: 1450,
        active: false
      },
      {
        name: 'PBG + ALA-24h urin',
        price: 2400,
        active: false
      },
      {
        name: 'Aldosteron-24h urin',
        price: 1400,
        active: false
      },
      {
        name: 'Metanefrin 24h urin',
        price: 3900,
        active: false
      },
      {
        name: 'VMA u 24h urinu',
        price: 1500,
        active: false
      },
      {
        name: '5 HIA u 24h urinu',
        price: 1500,
        active: false
      },
      {
        name: '17-ketosteroidi-24h urin',
        price: 1600,
        active: false
      },
      {
        name: '17 OH Kortikosteroidi-24h urin',
        price: 1600,
        active: false
      },
      {
        name: 'Melanin iz urina',
        price: 400,
        active: false
      },
      {
        name: 'Porfobilinogen u 24h urinu',
        price: 1300,
        active: false
      },
      {
        name: 'd-aminolevulinska kiselina',
        price: 1300,
        active: false
      },
      {
        name: 'Koproporfirin u 24h urinu',
        price: 1300,
        active: false
      },
      {
        name: 'Bence Jones proteini u 24h urinu',
        price: 400,
        active: false
      },
      {
        name: 'Bence Jones proteini u urinu',
        price: 400,
        active: false
      },
      {
        name: 'Cortisol u 24h urinu',
        price: 1000,
        active: false
      },
      {
        name: 'Imunoelektroforeza iz urina',
        price: 3300,
        active: false
      },
      {
        name: 'Uroporfobilinogen-24h urin',
        price: 1450,
        active: false
      },
      {
        name: 'Osmolarnost urina',
        price: 600,
        active: false
      },
      {
        name: 'Free Metanefrin-24 h urin',
        price: 4500,
        active: false
      },
      {
        name: 'Mikroalbumini u prvom jutarnjem urinu',
        price: 1200,
        active: false
      },
      {
        name: 'Kortizol u urinu',
        price: 1000,
        active: false
      },
      {
        name: 'Fenol iz prvog jutarnjeg urina',
        price: 2100,
        active: false
      },
      {
        name: 'Hipurna kiselina',
        price: 3600,
        active: false
      },
      {
        name: 'Hidroksipolin iz 24 urina',
        price: 1700,
        active: false
      },
      {
        name: 'Oksalati u 24h urinu',
        price: 2000,
        active: false
      },
      {
        name: 'Citrati u 24h urinu',
        price: 2300,
        active: false
      },
      {
        name: 'Adrenalin u 24h urinu',
        price: 1600,
        active: false
      },
      {
        name: 'Proteini u prvom jutarnjem urinu',
        price: 100,
        active: false
      },
      {
        name: 'Melanin iz urina (kvantitativno)',
        price: 7500,
        active: false
      },
      {
        name: 'Dopamin u 24h urinu',
        price: 1600,
        active: false
      },
      {
        name: 'Jod u urinu',
        price: 3350,
        active: false
      },
      {
        name: '8-hidroksideoksiguanozin (8-OH-dG)',
        price: 6300,
        active: false
      },
      {
        name: 'Cink u urinu',
        price: 1000,
        active: false
      },
      {
        name: 'Jod u 24h urinu',
        price: 3350,
        active: false
      },
      {
        name: 'Ornitin u 24h urinu',
        price: 4000,
        active: false
      },
      {
        name: 'Analiza na JAK 2V617F kinazu (PCR)',
        price: 8600,
        active: false
      },
      {
        name: 'Vitamin C u urinu (test traka)',
        price: 250,
        active: false
      },
      {
        name: 'Saturacija transferina',
        price: 1350,
        active: false
      },
      {
        name: 'Aluminijum u urinu',
        price: 4200,
        active: false
      },
      {
        name: 'Klirens uree',
        price: 400,
        active: false
      },
      {
        name: 'Trombociti (ručno brojanje)',
        price: 100,
        active: false
      }
    ],
    metabolizamglukozeidijabetes: [
      {
        name: 'Glukoza',
        price: 100,
        active: false
      },
      {
        name: 'HbA1c',
        price: 700,
        active: false
      },
      {
        name: 'Insulin',
        price: 1000,
        active: false
      },
      {
        name: 'Insulin 2h nakon opterećenja',
        price: 1000,
        active: false
      },
      {
        name: 'Insulin homa index',
        price: 1100,
        active: false
      },
      {
        name: 'Anti insulinska At',
        price: 1350,
        active: false
      },
      {
        name: 'C-peptid',
        price: 1000,
        active: false
      },
      {
        name: 'Anti GAD antitela',
        price: 2000,
        active: false
      },
      {
        name: 'Anti IA2 At',
        price: 2200,
        active: false
      },
      {
        name: 'OGTT',
        price: 700,
        active: false
      },
      {
        name: 'Fruktozamin',
        price: 900,
        active: false
      },
      {
        name: 'Anti ICA At',
        price: 2200,
        active: false
      },
      {
        name: 'Glukagon',
        price: 2500,
        active: false
      },
      {
        name: 'Glukoza u krvi (brzi test)',
        price: 100,
        active: false
      },
      {
        name: 'C-peptid iz 24h urina',
        price: 1000,
        active: false
      },
      {
        name: 'IgE na humani insulin',
        price: 2200,
        active: false
      },
      {
        name: 'Glukoza 90 minuta nakon jela',
        price: 100,
        active: false
      }
    ],
    biohemijametaboliti: [
      {
        name: 'Proteini (Ukupni)',
        price: 100,
        active: false
      },
      {
        name: 'Urea',
        price: 100,
        active: false
      },
      {
        name: 'Kreatinin',
        price: 100,
        active: false
      },
      {
        name: 'Mokraćna kiselina',
        price: 100,
        active: false
      },
      {
        name: 'Bilirubin (Ukupni)',
        price: 100,
        active: false
      },
      {
        name: 'Bilirubin (Direktni)',
        price: 100,
        active: false
      },
      {
        name: 's-albumin',
        price: 100,
        active: false
      },
      {
        name: 'Ukupne žučne kiseline',
        price: 700,
        active: false
      },
      {
        name: 'Prealbumin',
        price: 1200,
        active: false
      }
    ],
    enzimi: [
      {
        name: 'Alkalna fosfataza',
        price: 100,
        active: false
      },
      {
        name: 'AST/OT',
        price: 100,
        active: false
      },
      {
        name: 'ALT/PT',
        price: 100,
        active: false
      },
      {
        name: 'Gama GT',
        price: 100,
        active: false
      },
      {
        name: 'Alfa amilaza',
        price: 190,
        active: false
      },
      {
        name: 'Pankreasna amilaza',
        price: 590,
        active: false
      },
      {
        name: 'U-Amilaza',
        price: 190,
        active: false
      },
      {
        name: 'CK',
        price: 290,
        active: false
      },
      {
        name: 'LDH',
        price: 190,
        active: false
      },
      {
        name: 'CHE',
        price: 430,
        active: false
      },
      {
        name: 'ACE (Angiotenzin konverting enzim) ',
        price: 1300,
        active: false
      },
      {
        name: 'Lipaza',
        price: 400,
        active: false
      },
      {
        name: 'Kisela fosfataza',
        price: 290,
        active: false
      },
      {
        name: 'Prostatična kisela fosfataza',
        price: 180,
        active: false
      },
      {
        name: 'Tripsin',
        price: 1450,
        active: false
      },
      {
        name: 'Eritrocitna acetilholinesteraza',
        price: 1300,
        active: false
      },
      {
        name: 'Timidin kinaza',
        price: 2500,
        active: false
      },
      {
        name: 'Diaminooksidaza (DAO)',
        price: 1850,
        active: false
      },
      {
        name: 'CK izoenzimi (MM,MB,BB)',
        price: 2400,
        active: false
      },
      {
        name: 'Aldolaza',
        price: 1300,
        active: false
      },
      {
        name: 'Hitotriozidaza',
        price: 14500,
        active: false
      }
    ],
    srcanimarkeri: [
      {
        name: 'CK-MB',
        price: 450,
        active: false
      },
      {
        name: 'Troponin I',
        price: 800,
        active: false
      },
      {
        name: 'Pro-BNP',
        price: 3200,
        active: false
      },
      {
        name: 'BNP',
        price: 3300,
        active: false
      },
      {
        name: 'Mioglobin',
        price: 1450,
        active: false
      },
      {
        name: 'Troponin I (Kvantitativno)',
        price: 1100,
        active: false
      }
    ],
    lipidnistatus: [
      {
        name: 'Ukupni holesterol',
        price: 180,
        active: false
      },
      {
        name: 'Trigliceridi',
        price: 180,
        active: false
      },
      {
        name: 'Ukupni lipidni status',
        price: 550,
        active: false
      },
      {
        name: 'Apolipoprotein A',
        price: 490,
        active: false
      },
      {
        name: 'Apolipoprotein B',
        price: 490,
        active: false
      },
      {
        name: 'HDL',
        price: 150,
        active: false
      },
      {
        name: 'Lipoprotein (A)',
        price: 980,
        active: false
      },
      {
        name: 'Masne kiseline (C22-C26)',
        price: 6800,
        active: false
      }
    ],
    elektroliti: [
      {
        name: 'Na',
        price: 120,
        active: false
      },
      {
        name: 'K',
        price: 120,
        active: false
      },
      {
        name: 'Cl',
        price: 120,
        active: false
      },
      {
        name: 'Ukupni kalcijum (Ca)',
        price: 120,
        active: false
      },
      {
        name: 'Neorganski fosfor (P)',
        price: 120,
        active: false
      },
      {
        name: 'Magnezijum (Mg)',
        price: 120,
        active: false
      },
      {
        name: 'Cu (Bakar)',
        price: 600,
        active: false
      },
      {
        name: 'Cink',
        price: 1000,
        active: false
      },
      {
        name: 'Olovo',
        price: 2700,
        active: false
      },
      {
        name: 'Bikarbonati',
        price: 200,
        active: false
      },
      {
        name: 'Aluminijum',
        price: 2700,
        active: false
      },
      {
        name: 'Hrom',
        price: 3000,
        active: false
      },
      {
        name: 'Živa',
        price: 2600,
        active: false
      },
      {
        name: 'Selen',
        price: 2700,
        active: false
      },
      {
        name: 'Jod u serumu',
        price: 3350,
        active: false
      }
    ],
    reumatskifaktoriiinflacije: [
      {
        name: 'CRP',
        price: 540,
        active: false
      },
      {
        name: 'CRP (Brzim testom)',
        price: 550,
        active: false
      },
      {
        name: 'ASTO',
        price: 500,
        active: false
      },
      {
        name: 'Reumatski faktor',
        price: 500,
        active: false
      },
      {
        name: 'Waaler-Rose',
        price: 200,
        active: false
      }
    ],
    nivoleka: [
      {
        name: 's-Lithium',
        price: 500,
        active: false
      },
      {
        name: 's-Carbamazepin',
        price: 1000,
        active: false
      },
      {
        name: 's-Valproična kiselina - EFTIL',
        price: 1100,
        active: false
      },
      {
        name: 's-Phenobarbiton',
        price: 1200,
        active: false
      },
      {
        name: 's-Lamiktal ',
        price: 3800,
        active: false
      },
      {
        name: 's-Digoksin',
        price: 1500,
        active: false
      },
      {
        name: 's-Vitamin B1 - nivo leka',
        price: 2300,
        active: false
      },
      {
        name: 's-Kepra (levetiracetam)',
        price: 5700,
        active: false
      },
      {
        name: '10-hydroxyoxcarabazepin',
        price: 1400,
        active: false
      },
      {
        name: 's-Bromazepam',
        price: 6350,
        active: false
      },
      {
        name: 'Clonazepam (Rivotril)',
        price: 6350,
        active: false
      },
      {
        name: 'Clozapine (Leponex,Elcrit)',
        price: 2700,
        active: false
      },
      {
        name: 'Desmethyl clozapin',
        price: 2700,
        active: false
      },
      {
        name: 'Haloperidol',
        price: 2900,
        active: false
      },
      {
        name: 'Imatinib',
        price: 2900,
        active: false
      },
      {
        name: 'Levetiracetam',
        price: 5850,
        active: false
      },
      {
        name: 'Paliperidon palmitat (Xeplion)',
        price: 3150,
        active: false
      },
      {
        name: 's-Risperidon',
        price: 6250,
        active: false
      },
      {
        name: 's-Rivaroxaban (Xarelto)',
        price: 1450,
        active: false
      },
      {
        name: 'Sertralin',
        price: 6350,
        active: false
      },
      {
        name: 'Topiramat',
        price: 6650,
        active: false
      },
      {
        name: 'Everolimus (Certican)',
        price: 5880,
        active: false
      },
      {
        name: 'Rapamycin (Sirolimus)',
        price: 5500,
        active: false
      },
      {
        name: 's-Tacrolimus (Prograf)',
        price: 6250,
        active: false
      },
      {
        name: 'Fenitoin',
        price: 2400,
        active: false
      },
      {
        name: 's-Benzodiazepini',
        price: 3900,
        active: false
      },
      {
        name: 'u-Benzodiazepini (urin)',
        price: 1850,
        active: false
      },
      {
        name: 'ek-Cyclosporin A (MONOKLONALNI)',
        price: 2300,
        active: false
      },
      {
        name: 's-Humira (adalimumab) At + konc.',
        price: 13500,
        active: false
      },
      {
        name: 's-Humira (adalimumab) - nivo leka',
        price: 6000,
        active: false
      },
      {
        name: 'Dilacor',
        price: 2100,
        active: false
      }
    ],
    elektroforeze: [
      {
        name: 's-Elektroforeza',
        price: 500,
        active: false
      },
      {
        name: 's-Imunoelektroforeza',
        price: 3300,
        active: false
      },
      {
        name: 's-Haptoglobin ',
        price: 950,
        active: false
      },
      {
        name: 'hk-Methemoglobin',
        price: 1200,
        active: false
      },
      {
        name: 's-EGF(Epidermalni faktor rasta) ',
        price: 3350,
        active: false
      },
      {
        name: 'du-Elektroforeza iz 24h urina',
        price: 1300,
        active: false
      },
      {
        name: 'ek-Elektroforeza hemoglobina',
        price: 3000,
        active: false
      }
    ],
    koagulacija: [
      {
        name: 'pk-Vreme koagulacije',
        price: 100,
        active: false
      },
      {
        name: 'kk-Vreme krvarenja',
        price: 100,
        active: false
      },
      {
        name: 'cp-Protrombinsko vreme',
        price: 300,
        active: false
      },
      {
        name: 'cp-D-dimer',
        price: 1800,
        active: false
      },
      {
        name: 'cp-a-PTT',
        price: 300,
        active: false
      },
      {
        name: 'cp-Fibrinogen',
        price: 450,
        active: false
      },
      {
        name: 'cp-Antitrombin III',
        price: 1200,
        active: false
      },
      {
        name: 'cp-Heparin-anti Xa ',
        price: 1700,
        active: false
      },
      {
        name: 'cp-PROTEIN C',
        price: 3200,
        active: false
      },
      {
        name: 'cp-PROTEIN S',
        price: 3200,
        active: false
      },
      {
        name: 'cp-APC-rezistencija',
        price: 2500,
        active: false
      },
      {
        name: 'cp-Faktor VII (prokonvertin)',
        price: 3300,
        active: false
      },
      {
        name: 'cp-Von - Willebrandov faktor (aktivnost )',
        price: 2300,
        active: false
      },
      {
        name: 'cp-Von - Willebrandov faktor (Antigen)',
        price: 2300,
        active: false
      },
      {
        name: 'ck-Faktor V (Leiden V)-lokus1691',
        price: 4900,
        active: false
      },
      {
        name: 'cp-Faktor II (Protrombin II) ',
        price: 3100,
        active: false
      },
      {
        name: 'cp-Faktor VIII',
        price: 2500,
        active: false
      },
      {
        name: 'ck-Protrombin II-lokus 20210 A PCR',
        price: 5900,
        active: false
      },
      {
        name: 'cp-Trombinsko vreme',
        price: 520,
        active: false
      },
      {
        name: 'cp-Faktor IX',
        price: 3100,
        active: false
      },
      {
        name: 'cp-Faktor XI',
        price: 3100,
        active: false
      },
      {
        name: 'cp-Faktor XII',
        price: 3100,
        active: false
      },
      {
        name: 'cp-Faktor V (aktivnost) ',
        price: 2200,
        active: false
      },
      {
        name: 'cp-Euglobulinska fibrinoliza',
        price: 900,
        active: false
      },
      {
        name: 'Faktor XIII',
        price: 2200,
        active: false
      },
      {
        name: 'cp-Faktor X',
        price: 3100,
        active: false
      }
    ],
    vitamini: [
      {
        name: 's-Karnitin (vit. B20)',
        price: 2200,
        active: false
      },
      {
        name: 'ep-Vitamin K',
        price: 3100,
        active: false
      },
      {
        name: 's-Vitamin A',
        price: 2050,
        active: false
      },
      {
        name: 's-Vitamin E',
        price: 2050,
        active: false
      },
      {
        name: 's-Vitamin B6',
        price: 2050,
        active: false
      },
      {
        name: 's-Vitamin C',
        price: 2050,
        active: false
      },
      {
        name: 's-Vitamin B1 (tiamin)',
        price: 2050,
        active: false
      },
      {
        name: 's-Vitamin H (B7-Biotin)',
        price: 2650,
        active: false
      },
      {
        name: 's-Metilmalonska kiselina (MMA)',
        price: 4850,
        active: false
      },
      {
        name: 's-Vitamin B2',
        price: 2050,
        active: false
      },
      {
        name: 's-Coenzyme Q10',
        price: 3800,
        active: false
      }
    ],
    transfuzioloskeanalize: [
      {
        name: 's-Krvna grupa i Rh Faktor',
        price: 1300,
        active: false
      },
      {
        name: 's-Coombsov test ',
        price: 1600,
        active: false
      },
      {
        name: 's-Trudnička Rh-antitela',
        price: 1000,
        active: false
      }
    ],
    intolerancija: [
      {
        name: 's-Intolerancija na hranu 90',
        price: 16000,
        active: false
      },
      {
        name: 'ek-Intolerancija na hranu 40',
        price: 13500,
        active: false
      }
    ],
    testovinadrogeiopijate: [
      {
        name: 'Analiza urina na Barbiturate',
        price: 850,
        active: false
      },
      {
        name: 'Analiza urina na droge Amfetamin (Speed)',
        price: 1200,
        active: false
      },
      {
        name: 'Analiza urina na opijate Ecstasy',
        price: 1650,
        active: false
      },
      {
        name: 'Analiza urina na opijate Benzodiazepin',
        price: 1200,
        active: false
      },
      {
        name: 'Analiza urina na opijate Kokain',
        price: 1200,
        active: false
      },
      {
        name: 'MOP (heroin,morfin,kodein) ',
        price: 1200,
        active: false
      },
      {
        name: 'THC (marihuana, hašiš)',
        price: 1200,
        active: false
      },
      {
        name: 'u-Phencyclidine (PCP) ',
        price: 850,
        active: false
      },
      {
        name: 'u-Analiza urina na Metamfetamin',
        price: 850,
        active: false
      }
    ],
    opstaimunologija: [
      {
        name: 's-C3',
        price: 500,
        active: false
      },
      {
        name: 's-C4',
        price: 500,
        active: false
      },
      {
        name: 's-IgG',
        price: 500,
        active: false
      },
      {
        name: 's-IgA',
        price: 500,
        active: false
      },
      {
        name: 's-IgM',
        price: 500,
        active: false
      },
      {
        name: 's-Ukupni IgE',
        price: 500,
        active: false
      },
      {
        name: 's-Lupus antitela',
        price: 1350,
        active: false
      },
      {
        name: 's-ENA (ANA profil)',
        price: 4600,
        active: false
      },
      {
        name: 'ck-Lupus ćelije',
        price: 900,
        active: false
      },
      {
        name: 's-Hladni aglutinini',
        price: 650,
        active: false
      },
      {
        name: 's-IgD',
        price: 1100,
        active: false
      },

    ],
    dijagnostikacelijakije: [
      {
        name: 's-Transglutaminska antitela IgA',
        price: 1200,
        active: false
      },
      {
        name: 's-Transglutaminska antitela IgG ',
        price: 1200,
        active: false
      },
      {
        name: 's-Antiglijadinska antitela IgA ',
        price: 1200,
        active: false
      },
      {
        name: 's-Antiglijadinska antitela IgG',
        price: 1200,
        active: false
      },
      {
        name: 's-AMA M2 IgG (antimitohondrijska at)',
        price: 1200,
        active: false
      },
      {
        name: 's-ASCA IgA, IgG (Kronova bolest)',
        price: 1200,
        active: false
      }
    ],
    dijagnostikatromboze: [
      {
        name: 's-Antifosfolipidna antitela IgM',
        price: 1200,
        active: false
      },
      {
        name: 's-Antifosfolipidna antitela IgG',
        price: 1200,
        active: false
      },
      {
        name: 's-Antikardiolipinska At IgM ',
        price: 1200,
        active: false
      },
      {
        name: 's-Antikardiolipinska At IgG',
        price: 1200,
        active: false
      },
      {
        name: 's-β2-glikoprotein IgG',
        price: 1200,
        active: false
      },
      {
        name: 's-β2-glikoprotein IgM',
        price: 1200,
        active: false
      }
    ],
    reumatologijaimunologija: [
      {
        name: 's-ANA- screen',
        price: 1200,
        active: false
      },
      {
        name: 's-Anti CCP',
        price: 1200,
        active: false
      },
      {
        name: 's-Anti MCV',
        price: 1800,
        active: false
      }
    ],
    pcrdijagnostikaspi: [
      {
        name: 'HPV test sa genotipizacijom',
        price: 5200,
        active: false
      },
      {
        name: 'HPV test sa genotipizacijom HR/LP PCR',
        price: 5200,
        active: false
      },
      {
        name: 'HPV test sa genotipizacijom HR/LR PCR',
        price: 5200,
        active: false
      }
    ],
    pcrhepatitisi: [
      {
        name: 'ep-Hepatitis C-RNA-kvantitativno',
        price: 15000,
        active: false
      },
      {
        name: 'ep-Hepatitis C-RNA-kvalitativno',
        price: 15000,
        active: false
      },
      {
        name: 'ep-Hepatitis C-DNA-kvantitativno',
        price: 15000,
        active: false
      },
      {
        name: 'ep-Hepatitis C-DNA-kvalitativno',
        price: 15000,
        active: false
      }
    ],
    pcrdijagnostikatromboze: [
      {
        name: 'ck-MTHFR (metilentetrahidrofolat reduktaza) - PCR',
        price: 3500,
        active: false
      },
      {
        name: 'ck-MTHFR-C677T',
        price: '4900',
        active: false
      },
      {
        name: 'ck-MTHFR A1298C',
        price: 4900,
        active: false
      },
      {
        name: 'CBS 844 u 68 mutacija',
        price: 5900,
        active: false
      },
      {
        name: 'ck-EPRC (endotelial protein receptor C)',
        price: 3700,
        active: false
      }
    ],
    pcrdijagnostikabcra1ibrca2: [
      {
        name: 'BRCA1 i BRCA2',
        price: 62000,
        active: false
      }
    ],
    pcracegenskevarijante: [
      {
        name: 'ck-Mikrodelecije Y hromozoma (AZF-a,-b,-c)',
        price: 14000,
        active: false
      }
    ],
    ostaladijagnostika: [
      {
        name: 'ek-Intolerancija na laktozu',
        price: 7500,
        active: false
      },
      {
        name: 'Metabolizam kofeina',
        price: 4900,
        active: false
      },
      {
        name: 'Intolerancija na gluten',
        price: 10000,
        active: false
      }
    ],
    panelseksualnoprenosivihbolesti: [
      {
        name: 'Mycoplasma genitalium PCR',
        price: 5200,
        active: false
      },
      {
        name: 'Ureaplasma urealyticum PCR',
        price: 5200,
        active: false
      },
      {
        name: 'Dodatna analiza uzrocnika seksualno prenosive bolesti',
        price: 2000,
        active: false
      },
      {
        name: 'Chlamydia trachomatis HR/LR PCR - cerviks',
        price: 5200,
        active: false
      },
      {
        name: 'Chlamydia trachomatis',
        price: 5200,
        active: false
      },
      {
        name: 'Chlamydia trachomatis PCR',
        price: 5200,
        active: false
      },
      {
        name: 'Citomegalo virus (PCR)',
        price: 6500,
        active: false
      },
      {
        name: 'PCR na bacil tuberkuloze (iz krvi)',
        price: 8500,
        active: false
      },
      {
        name: 'ck-Detekcija mutacije u genu za inhibitor aktivatora plazminogena 1 (PAI) - PCR',
        price: 5000,
        active: false
      },
      {
        name: 'u-PCA3 mRNA Score',
        price: 32000,
        active: false
      },
      {
        name: 'ep-Hepatitis C (PCR)-sa genotipizacijom',
        price: 15000,
        active: false
      },
      {
        name: 'Chlamydia trachomatis PCR',
        price: 5200,
        active: false
      },
      {
        name: 'Herpes simplex tip 1/tip 2 PCR',
        price: 5200,
        active: false
      },
      {
        name: 'Mycoplasma genitalium PCR',
        price: 5200,
        active: false
      },
      {
        name: 'Ureaplasma urealyticum PCR',
        price: 5200,
        active: false
      },
      {
        name: 'Gardnerella vaginalis PCR',
        price: 5200,
        active: false
      },
      {
        name: 'Trichomonas vaginalis PCR',
        price: 5200,
        active: false
      },
      {
        name: 'Neisseria gonorrhoeae PCR',
        price: 5200,
        active: false
      },
      {
        name: 'Chlamydia trachomatis PCR-cerviks dodatna an. panela STD',
        price: 2000,
        active: false
      },
      {
        name: 'ek-HIV-RNA-kvalitativno',
        price: 15000,
        active: false
      },
      {
        name: 'ek-HIV-RNA-kvantitativno',
        price: 15000,
        active: false
      },
      {
        name: 'Mikronukleusni test',
        price: 6500,
        active: false
      },
      {
        name: 'Cistična fibroza PCR',
        price: 13200,
        active: false
      },
      {
        name: 'Herpes simplex tip1/tip2 PCR-urin dod.an.panela STD',
        price: 2000,
        active: false
      },
      {
        name: 'Mycoplasma genitalium PCR-urin dod.an.panela STD',
        price: 2000,
        active: false
      },
      {
        name: 'Gardnerella vaginalis PCR-urin dod.an.panela STD',
        price: 2000,
        active: false
      },
      {
        name: 'Trichomonas vaginalis PCR-urin dod.an.panela STD',
        price: 2000,
        active: false
      },
      {
        name: 'Neisseria gonorrhoeae PCR-urin dod.an.panela STD',
        price: 2000,
        active: false
      },
      {
        name: 'BRAF gen-PCR',
        price: 65000,
        active: false
      },
      {
        name: 'herpes simlex tip 1/tip 2 PCR',
        price: 5200,
        active: false
      },
      {
        name: 'cp-Hemohromatoza',
        price: 16000,
        active: false
      },
      {
        name: 'cp-BCR-ABL fuzioni transkript',
        price: 22500,
        active: false
      },
      {
        name: 's-Varicella zoster virus (VZV) PCR',
        price: 8000,
        active: false
      },
      {
        name: 'Trichomonas vaginalis PCR - urin',
        price: 5200,
        active: false
      },
      {
        name: 'Chlamydia trachomatis PCR - urin dodatna an panela STD',
        price: 2000,
        active: false
      },

    ],
    pojedinacnialergeni: [
      {
        name: 's-Penicilin G',
        price: 1300,
        active: false
      },
      {
        name: 's-Penicilin V',
        price: 1300,
        active: false
      },
      {
        name: 's-Amoxicilin',
        price: 3000,
        active: false
      },
      {
        name: 'S-Ampicilin',
        price: 1300,
        active: false
      },
      {
        name: 's-Kućna prašina',
        price: 1300,
        active: false
      },
      {
        name: 's-Grinje',
        price: 1300,
        active: false
      },
      {
        name: 's-Mačka - epitel, proteini izlučevina',
        price: 2200,
        active: false
      },
      {
        name: 's-Pas - epitel',
        price: 2200,
        active: false
      },
      {
        name: 's-Pirevina',
        price: 1300,
        active: false
      },
      {
        name: 's-Popino prase',
        price: 1300,
        active: false
      },
      {
        name: 's-Pelen',
        price: 1300,
        active: false
      },
      {
        name: 's-Ambrozija',
        price: 1600,
        active: false
      },
      {
        name: 's-Buđ-Alternaria tenuis',
        price: 1300,
        active: false
      },
      {
        name: 's-Buđ-Aspergillus fumigatus',
        price: 2400,
        active: false
      },
      {
        name: 's-Belance jaja',
        price: 1300,
        active: false
      },
      {
        name: 's-Mleko',
        price: 1300,
        active: false
      },
      {
        name: 's-Pšenica',
        price: 1300,
        active: false
      },
      {
        name: 's-Pšenično brašno',
        price: 1500,
        active: false
      },
      {
        name: 's-Grašak',
        price: 1300,
        active: false
      },
      {
        name: 's-Kikiriki',
        price: 2800,
        active: false
      },
      {
        name: 's-Paradajz',
        price: 1300,
        active: false
      },
      {
        name: 's-Svinjetina',
        price: 1800,
        active: false
      },
      {
        name: 's-Teletina',
        price: 2100,
        active: false
      },
      {
        name: 's-Jagnjetina',
        price: 1300,
        active: false
      },
      {
        name: 's-Piletina',
        price: 2300,
        active: false
      },
      {
        name: 's-Jagoda',
        price: 2500,
        active: false
      },
      {
        name: 's-Banana',
        price: 1300,
        active: false
      },
      {
        name: 's-Kruška',
        price: 1300,
        active: false
      },
      {
        name: 's-Breskva',
        price: 1600,
        active: false
      },
      {
        name: 's-Gluten',
        price: 1800,
        active: false,
      },
      {
        name: 's-Kazein',
        price: 2700,
        active: false
      },
      {
        name: 's-Pčela',
        price: 2600,
        active: false
      },
      {
        name: 's-Osa',
        price: 2600,
        active: false
      },
      {
        name: 's-Pas - dlaka',
        price: 2200,
        active: false
      },
      {
        name: 's-Diklofenak',
        price: 3700,
        active: false
      },
      {
        name: 's-Brufen',
        price: 1700,
        active: false
      },
      {
        name: 's-Cefalosporini',
        price: 1700,
        active: false
      },
      {
        name: 's-Aspirin',
        price: 3500,
        active: false
      },
      {
        name: 's-Paprika',
        price: 2300,
        active: false
      },
      {
        name: 's-Med',
        price: 2300,
        active: false
      },
      {
        name: 'ep-Histamin',
        price: 1800,
        active: false
      },
      {
        name: 's-Paracetamol',
        price: 3300,
        active: false
      },
      {
        name: 's-Alergija na duvanski dim',
        price: 2300,
        active: false
      },
      {
        name: 's-Ciprocinal',
        price: 3500,
        active: false
      },
      {
        name: 's-Perje (guska, pile, patka, papagaj)',
        price: 2300,
        active: false
      },
      {
        name: 's-Mešavina polena korova',
        price: 2300,
        active: false
      },
      {
        name: 's-Soja',
        price: 2400,
        active: false
      },
      {
        name: 's-Lidokain',
        price: 4600,
        active: false
      },
      {
        name: 's-Žumance jaja',
        price: 1800,
        active: false
      },
      {
        name: 's-Vitamin B1 - lgE',
        price: 3500,
        active: false
      },
      {
        name: 's-Tetraciklini',
        price: 2000,
        active: false
      },
      {
        name: 's-Buđ MIX MX1 (M1, M2, M3, M6)',
        price: 2050,
        active: false
      },
      {
        name: 's-Stršljen',
        price: 2000,
        active: false
      },
      {
        name: 'Čokolada',
        price: 1800,
        active: false
      },
      {
        name: 'Sardina',
        price: 2100,
        active: false
      },
      {
        name: 'Doksiciklin',
        price: 1800,
        active: false
      },
      {
        name: 's-Susam',
        price: 1850,
        active: false
      },
      {
        name: 's-Tuna',
        price: 2100,
        active: false
      },
      {
        name: 's-Skuša',
        price: 2800,
        active: false
      },
      {
        name: 's-Novagetol',
        price: 4100,
        active: false
      },
      {
        name: 'Kukuruz',
        price: 1800,
        active: false
      },
      {
        name: 'Hemomycin',
        price: 1800,
        active: false
      },
      {
        name: 's-Baktrim',
        price: 1800,
        active: false
      },
      {
        name: 's-Erytromicin',
        price: 1800,
        active: false
      },
      {
        name: 's-Gentamycin',
        price: 1800,
        active: false
      },
      {
        name: 's-Kakao',
        price: 2200,
        active: false
      },
      {
        name: 's-Clindamycin',
        price: 1900,
        active: false
      },
      {
        name: 's-Leflogal',
        price: 3100,
        active: false
      },
      {
        name: 's-Gljivike',
        price: 1800,
        active: false
      },
      {
        name: 's-Artikain',
        price: 2000,
        active: false
      }
    ],
    panelialergena: [
      {
        name: 's-Nutritivni panel (6 alergena)',
        price: 2300,
        active: false
      },
      {
        name: 's-Inhalacioni panel (5 alergena)',
        price: 2300,
        active: false
      },
      {
        name: 's-Nutritivni panel (20 alergena)',
        price: 5850,
        active: false
      },
      {
        name: 's-Inhalacioni mediteranski tip (20 alergena)',
        price: 5850,
        active: false
      },
      {
        name: 's-Kombinovani panel 54 alergena (inh.+ nut.) ',
        price: 7800,
        active: false
      },
      {
        name: 'PHADIATOP INFANT',
        price: 2800,
        active: false
      }
    ],
    patohistologija: [
      {
        name: 'Papanikolau (citoskriner)',
        price: 700,
        active: false
      },
      {
        name: 'Papanikolau (patolog)',
        price: 1000,
        active: false
      },
      {
        name: 'Papanikolau - REVIZIJA',
        price: 2000,
        active: false
      },
      {
        name: 'Patohistološki nalaz (biopsija)',
        price: 2500,
        active: false
      },
      {
        name: 'Patohistološki nalaz (biopsija) II',
        price: 2000,
        active: false
      },
      {
        name: 'Patohistološki nalaz (biopsija) III',
        price: 2000,
        active: false
      },
      {
        name: 'Patohistološki nalaz (biopsija) IV',
        price: 2000,
        active: false
      },
      {
        name: 'Sekstant biopsije prostate ',
        price: 4500,
        active: false
      },
      {
        name: 'Revizija PH nalaza ',
        price: 7000,
        active: false
      },
      {
        name: 'Konizat',
        price: 4500,
        active: false
      },
      {
        name: 'Loop excizija grlića materice',
        price: 4000,
        active: false
      },
      {
        name: 'Kiretman (eksplorativna kiretaža cerviksa-ECC)',
        price: 2500,
        active: false
      },
      {
        name: 'Operativni materijal (mali do 5 kalupa)',
        price: 3500,
        active: false
      },
      {
        name: 'Citoblok',
        price: 2500,
        active: false
      },
      {
        name: 'Revizija PH nalaza (16-20 kalupa)',
        price: 20000,
        active: false
      },
      {
        name: 'Operativni materijal (veliki 6-10 kalupa)',
        price: 5000,
        active: false
      },
      {
        name: 'Operativni materijal (veliki 11-15 kalupa)',
        price: 7500,
        active: false
      },
      {
        name: 'Operativni materijal (veliki 16-20 kalupa)',
        price: 10000,
        active: false
      },
      {
        name: 'Operativni materijal (veliki 21-25 kalupa)',
        price: 12500,
        active: false
      },
      {
        name: 'Operativni materijal (veliki 26-30 kalupa)',
        price: 15000,
        active: false
      },
      {
        name: 'Operativni materijal (veliki 31-35 kalupa)',
        price: 17500,
        active: false
      },
      {
        name: 'Operativni materijal (veliki 36-40 kalupa)',
        price: 20000,
        active: false
      },
      {
        name: 'Citologija',
        price: 1100,
        active: false
      },
      {
        name: 'Biopsija prostate sa 12 uzoraka',
        price: 6000,
        active: false
      },
      {
        name: 'Biopsija ex tempore',
        price: 10000,
        active: false
      },
      {
        name: 'Operativni materijal (veliki više od 40 kalupa)',
        price: 22500,
        active: false
      },
      {
        name: 'Bojenje preparata po MGG',
        price: 200,
        active: false
      },
      {
        name: 'Citološki preparat',
        price: 200,
        active: false
      },
      {
        name: 'Patohistologija-revizija',
        price: 7500,
        active: false
      },
      {
        name: 'Patohistologija-revizija velikog operativnog materijala',
        price: 16000,
        active: false
      },
      {
        name: 'Kiretman (tri bioptička materijala)',
        price: 2500,
        active: false
      },
      {
        name: 'Biopsija grlića materice',
        price: 2500,
        active: false
      },
      {
        name: 'Biopsija grlića materice i kiretman',
        price: 3500,
        active: false
      },
      {
        name: 'Biopsija grlića materice i 2 kiretmana',
        price: 4500,
        active: false
      },
      {
        name: 'Loop excizija grlića materice i 2 kiretmana',
        price: 6000,
        active: false
      },
      {
        name: 'Konizat i kiretman',
        price: 5500,
        active: false
      },
      {
        name: 'Revizija PH nalaza (21-25 kalupa)',
        price: 25000,
        active: false
      },
      {
        name: 'Revizija PH nalaza (26-30 kalupa)',
        price: 30000,
        active: false
      },
      {
        name: 'Revizija PH nalaza (31-35 kalupa)',
        price: 35000,
        active: false
      },
      {
        name: 'Revizija PH nalaza (36-40 kalupa)',
        price: 40000,
        active: false
      },
      {
        name: 'Revizija PH nalaza (više od 40 kalupa)',
        price: 45000,
        active: false
      },
      {
        name: 'Kiretman (eksplorativna kiretaža kavuma uterusa u endocerviksa)',
        price: 3500,
        active: false
      }
    ],

    imunohistohemija: [
      {
        name: 'Imunohistohemija izrada 1 antitela sa dijagnozom',
        price: 4000,
        active: false
      },
      {
        name: 'P 16 test',
        price: 5000,
        active: false
      },
      {
        name: 'Imunohistohemija izrada preko 10 antitela sa dijagnozom',
        price: 25000,
        active: false
      },
      {
        name: 'Imunohistohemija izrada 3 antitela sa dijagnozom',
        price: 12000,
        active: false
      }
    ],
    ostaleanalize: [
      {
        name: 'Kamen iz bubrega',
        price: 900,
        active: false
      }
    ],
    nadbubreznazleda: [
      {
        name: 'DHEA',
        price: 1400,
        active: false
      }
    ],
    kateholaminiizkrvi: [
      {
        name: 'ep-Dopamin',
        price: 1600,
        active: false
      },
      {
        name: 'ep-Noradrenalin',
        price: 1600,
        active: false
      },
      {
        name: 'ep-Adrenalin',
        price: 1600,
        active: false
      }
    ],
    metabolitikateholaminaukrvi: [
      {
        name: 'ep-Metanefrin',
        price: 3000,
        active: false
      },
      {
        name: 'ep-Normetanefrin ',
        price: 4000,
        active: false
      },
      {
        name: 'ep-free Metanefrin',
        price: 3000,
        active: false
      }
    ],
    prenatalniscreening: [
      {
        name: 's-Dabl test ( free BHCG, PAPP-a )',
        price: 2600,
        active: false
      },
      {
        name: 's-Tripl test (AFP free E3 HCG)',
        price: 2600,
        active: false
      },
      {
        name: 's-Quadruple test ( AFP free E3 HCG Inh A)',
        price: 4900,
        active: false
      }
    ],
    dermatoloskaispitivanja: [
      {
        name: 'Kultura na dermatofite',
        price: 500,
        active: false
      },
      {
        name: 'Kultura na gljivice',
        price: 500,
        active: false
      }
    ],
    virusologija: [
      {
        name: 'v. Herpes simplex HSV tip 1 na pločici (DIF)',
        price: 1700,
        active: false
      },
      {
        name: 'v. Herpes simplex HSV tip 2 na pločici (DIF)',
        price: 1700,
        active: false
      },
      {
        name: 's-Anti HIV 1+2',
        price: 1200,
        active: false
      },
      {
        name: 's-anti HBs',
        price: 1300,
        active: false
      },
      {
        name: 's-HBc IgM at',
        price: 1500,
        active: false
      },
      {
        name: 's-anti HCV',
        price: 1500,
        active: false
      },
      {
        name: 's-anti HAV IgM',
        price: 1500,
        active: false
      },
      {
        name: 's-anti HBe',
        price: 1300,
        active: false
      },
      {
        name: 's-HBeAg',
        price: 1300,
        active: false
      },
      {
        name: 's-HBsAg',
        price: 900,
        active: false
      },
      {
        name: 's-HTLV I/II ',
        price: 1600,
        active: false
      },
      {
        name: 'MUMPS IgG',
        price: 1300,
        active: false
      },
      {
        name: 'MUMPS IgM',
        price: 1300,
        active: false
      },
      {
        name: 's-v. Morbile IgM',
        price: 1300,
        active: false
      },
      {
        name: 's-HBc ukupna at',
        price: 1300,
        active: false
      },
      {
        name: 's-v. Morbile IgG',
        price: 1300,
        active: false
      },
      {
        name: 's-HBc IgG at',
        price: 1500,
        active: false
      },
      {
        name: 's-HEV ukupna At',
        price: 1500,
        active: false
      },
      {
        name: 's-HCV (W.Blot)',
        price: 9500,
        active: false
      },
      {
        name: 's-Anti HAV (ukupna At)',
        price: 1300,
        active: false
      },
      {
        name: 's-HDV Ag',
        price: 1500,
        active: false
      },
      {
        name: 's-HDV IgM',
        price: 1500,
        active: false
      },
      {
        name: 's-HDV ukupno At ',
        price: 1500,
        active: false
      },
      {
        name: 'HEV IgM',
        price: 1500,
        active: false
      },
      {
        name: 's-anti HAV IgG',
        price: 1700,
        active: false
      },
      {
        name: 'HCV(RIBA)',
        price: 6000,
        active: false
      }
    ],
    feces: [
      {
        name: 'Stolica na svarljivost hrane',
        price: 300,
        active: false
      },
      {
        name: 'Clostridium difficile tip A/B',
        price: 2200,
        active: false
      },
      {
        name: 'Stolica na okultno krvarenje',
        price: 500,
        active: false
      },
      {
        name: 'Koprokultura',
        price: 490,
        active: false
      },
      {
        name: 'Koprokultura + gljivice',
        price: 640,
        active: false
      },
      {
        name: 'Stolica na gljivice',
        price: 300,
        active: false
      },
      {
        name: 'Stolica na ciste crevnih protozoa',
        price: 350,
        active: false
      },
      {
        name: 'Stolica na jaja crevnih parazita',
        price: 350,
        active: false
      },
      {
        name: 'Perianalni otisak',
        price: 200,
        active: false
      },
      {
        name: 'Rotavirus iz stolice ',
        price: 900,
        active: false
      },
      {
        name: 'Adenovirus iz stolice',
        price: 900,
        active: false
      },
      {
        name: 'Helicobacter pylori iz stolice',
        price: 900,
        active: false
      },
      {
        name: 'Kalprotektin',
        price: 3900,
        active: false
      },
      {
        name: 'Pankreasna elastaza',
        price: 4000,
        active: false
      },
      {
        name: 'Stolica na ciste Blastocystisa',
        price: 350,
        active: false
      },
      {
        name: 'Norovirus GI/GII ',
        price: 1550,
        active: false
      },
      {
        name: 'Campylobacter jejuni i coli (RIDA QUICK)',
        price: 1500,
        active: false
      },
      {
        name: 'Yersinia enterocolitica 0,3;0,9 ',
        price: 1500,
        active: false
      }
    ],
    genetskeanalize: [
      {
        name: 'Očinstvo (otac+dete)',
        price: 25000,
        active: false
      },
      {
        name: 'Očinstvo (sledeći član)',
        price: 8000,
        active: false
      },
      {
        name: 'hk-Kariotip iz periferne krvi',
        price: 9000,
        active: false
      },
      {
        name: 'Provera DNK za očinstvo',
        price: 5500,
        active: false
      },
      {
        name: 'Očinstvo nakon provere DNK',
        price: 19500,
        active: false
      },
      {
        name: 'Hromozomske aberacije',
        price: 5900,
        active: false
      },
      {
        name: 'Majčinstvo (majka+dete)',
        price: 25000,
        active: false
      }
    ],
    usluge: [
      {
        name: 'Uslužno vađenje krvi',
        price: 200,
        active: false
      },
      {
        name: 'Vađenje krvi',
        price: 90,
        active: false
      }
    ]
  },
  methods: {
    toggleActive: function(s) {
      s.active = !s.active;
    },
    total: function() {
      var total = 0;

      this.hematoloskeanalize.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.metabolizamgvozdjaianemija.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.analizeurina.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.metabolizamglukozeidijabetes.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.biohemijametaboliti.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.enzimi.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.srcanimarkeri.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.lipidnistatus.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.elektroliti.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.reumatskifaktoriiinflacije.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.nivoleka.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.pcrdijagnostikaspi.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.pcrhepatitisi.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.pcrdijagnostikatromboze.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.pcrdijagnostikabcra1ibrca2.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.pcracegenskevarijante.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.ostaladijagnostika.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.panelseksualnoprenosivihbolesti.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.elektroforeze.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.koagulacija.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.vitamini.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.transfuzioloskeanalize.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.intolerancija.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.testovinadrogeiopijate.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.opstaimunologija.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.dijagnostikacelijakije.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.dijagnostikatromboze.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.reumatologijaimunologija.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.panelialergena.forEach(function(s) {
        if(s.active) {
          total += s.price;
        }
      });

      this.pojedinacnialergeni.forEach(function(s) {
        if(s.active) {
          total += s.price;
        }
      });

      this.patohistologija.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.imunohistohemija.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.ostaleanalize.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.nadbubreznazleda.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.kateholaminiizkrvi.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.metabolitikateholaminaukrvi.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.prenatalniscreening.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.dermatoloskaispitivanja.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.virusologija.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.feces.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      this.genetskeanalize.forEach(function(s) {
        if(s.active) {
          total += s.price;
        }
      });

      this.usluge.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      return total;
    }
  }
});

$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open
    this.multiple = multiple || false;

    var dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //ul.submenuItems
        $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.accordion-menu'), false);
})
