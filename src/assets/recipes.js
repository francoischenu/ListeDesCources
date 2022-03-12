// eslint-disable-next-line no-unused-vars
const recipeTemplate = {
  name: '',
  ingredients: [],
};

const recipe1 = {
  name: 'curry crevettes haricots verts',
  ingredients: [
    {
      id: '2022-01-31T13:10:46.392Z', name: 'carotte', quantity: '1', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-01-31T13:10:56.643Z', name: 'citron', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'fruit',
    },
    {
      id: '2022-01-31T13:11:04.942Z', name: 'crevettes', quantity: '125', category: 'Frais', subCategory: 'poisson',
    },
    {
      id: '2022-01-31T13:11:12.893Z', name: 'curry', quantity: '0.5', category: 'Epicerie', subCategory: 'épice',
    },
    {
      id: '2022-01-31T13:11:27.649Z', name: 'haricots verts', quantity: '200', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-01-31T13:11:35.490Z', name: 'lait de coco', quantity: '150', category: 'Epicerie', subCategory: 'asiatique',
    },
    {
      id: '2022-01-31T13:11:41.649Z', name: 'riz', quantity: '150', category: 'Epicerie', subCategory: 'féculent',
    },
  ],
};

const recipe2 = {
  name: 'curry jaune de crevettes au lait de coco',
  toggleIngredients: false,
  ingredients: [
    {
      id: '2022-01-31T13:08:08.715Z', name: 'crevettes', quantity: '125', category: 'Frais', subCategory: 'poisson',
    },
    {
      id: '2022-01-31T13:08:28.268Z', name: 'curry', quantity: '0.5', category: 'Epicerie', subCategory: 'épice',
    },
    {
      id: '2022-01-31T13:08:39.285Z', name: 'ail', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-01-31T13:08:48.634Z', name: 'lait de coco', quantity: '150', category: 'Epicerie', subCategory: 'asiatique',
    },
    {
      id: '2022-01-31T13:08:57.188Z', name: 'oignon nouveau', quantity: '1', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-01-31T13:09:07.034Z', name: 'poireau', quantity: '1', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-01-31T13:09:12.852Z', name: 'riz', quantity: '150', category: 'Epicerie', subCategory: 'féculent',
    },
  ],
};

const recipe3 = {
  name: 'borek aux épinards',
  toggleIngredients: false,
  ingredients: [
    {
      id: '2022-01-31T16:31:00.149Z', name: 'betterave', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-01-31T16:31:12.587Z', name: 'feuille de brick', quantity: '8', category: 'Frais', subCategory: 'pâte',
    },
    {
      id: '2022-01-31T16:31:22.235Z', name: 'fior di ricotta', quantity: '100', category: 'Frais', subCategory: 'fromage',
    },
    {
      id: '2022-01-31T16:31:30.297Z', name: 'féta', quantity: '80', category: 'Frais', subCategory: 'fromage',
    },
    {
      id: '2022-01-31T16:31:40.163Z', name: 'menthe', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'herbe',
    },
    {
      id: '2022-01-31T16:31:50.175Z', name: 'oignon', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-01-31T16:31:58.511Z', name: 'roquette', quantity: '50', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-01-31T16:32:08.873Z', name: 'épinard', quantity: '100', category: 'Fruits et légumes', subCategory: 'légume',
    },
  ],
};

const recipe4 = {
  name: 'Quinoa bowl mangue avocat',
  ingredients: [
    {
      id: '2022-02-04T10:48:21.394Z', name: 'avocat', quantity: '1', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-02-04T10:48:59.847Z', name: 'carotte', quantity: '1', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-02-04T10:49:07.599Z', name: 'citron', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'fruit',
    },
    {
      id: '2022-02-04T10:49:18.507Z', name: 'coriandre', quantity: '1', category: 'Fruits et légumes', subCategory: 'herbe',
    },
    {
      id: '2022-02-04T10:49:34.059Z', name: 'échalotte', quantity: '0.25', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-02-04T10:49:43.443Z', name: 'fèves', quantity: '300', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-02-04T10:49:49.715Z', name: 'mangue', quantity: '1', category: 'Fruits et légumes', subCategory: 'fruit',
    },
    {
      id: '2022-02-04T10:49:57.235Z', name: 'quinoa', quantity: '150', category: 'Epicerie', subCategory: 'féculent',
    },
  ],
};

const recipe5 = {
  name: 'brochette poulet teriyaki',
  ingredients: [
    {
      id: '2022-02-04T10:51:37.971Z', name: 'chou pak choy', quantity: '1', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-02-04T10:51:50.898Z', name: 'filet de poulet', quantity: '2', category: 'Frais', subCategory: 'viande',
    },
    {
      id: '2022-02-04T10:52:02.626Z', name: 'gingembre', quantity: '2', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-02-04T10:52:16.634Z', name: 'ail', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-02-04T10:52:25.378Z', name: 'oignon', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-02-04T10:52:32.994Z', name: 'riz', quantity: '150', category: 'Epicerie', subCategory: 'féculent',
    },
    {
      id: '2022-02-04T10:52:47.490Z', name: 'vinaigre de riz', quantity: '10', category: 'Epicerie', subCategory: 'huile',
    },
  ],
};

const recipe6 = {
  name: 'poke poulet',
  ingredients: [
    {
      id: '2022-02-04T10:54:28.609Z', name: 'boulgour', quantity: '120', category: 'Epicerie', subCategory: 'féculent',
    },
    {
      id: '2022-02-04T10:54:33.337Z', name: 'carotte', quantity: '1', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-02-04T10:54:40.833Z', name: 'citron', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'fruit',
    },
    {
      id: '2022-02-04T10:54:54.801Z', name: 'filet de poulet', quantity: '2', category: 'Frais', subCategory: 'viande',
    },
    {
      id: '2022-02-04T10:55:10.849Z', name: 'fromage blanc', quantity: '50', category: 'Frais', subCategory: 'yaourt',
    },
    {
      id: '2022-02-04T10:55:19.772Z', name: 'oignon rouge', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-02-04T10:55:26.915Z', name: 'roquette', quantity: '50', category: 'Fruits et légumes', subCategory: 'légume',
    },
  ],
};

const recipe7 = {
  name: 'Salade de macaroni',
  ingredients: [
    {
      id: '2022-02-04T10:56:25.546Z', name: 'fenouil', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-02-04T10:56:30.425Z', name: 'ail', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-02-04T10:56:37.481Z', name: 'lardons', quantity: '150', category: 'Frais', subCategory: 'jambon',
    },
    {
      id: '2022-02-04T10:56:49.673Z', name: 'macaroni', quantity: '200', category: 'Epicerie', subCategory: 'féculent',
    },
    {
      id: '2022-02-04T10:56:57.329Z', name: 'oignon rouge', quantity: '0.25', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-02-04T10:57:07.593Z', name: 'parmesan', quantity: '20', category: 'Frais', subCategory: 'fromage',
    },
    {
      id: '2022-02-04T10:57:15.657Z', name: 'épinard', quantity: '50', category: 'Fruits et légumes', subCategory: 'légume',
    },
  ],
};

const recipe8 = {
  name: 'gnocchi all sorentina',
  ingredients: [
    {
      id: '2022-02-04T10:58:08.513Z', name: 'échalotte', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-02-04T10:58:16.840Z', name: 'gnocchi', quantity: '400', category: 'Frais', subCategory: 'pâtes fraiches',
    },
    {
      id: '2022-02-04T10:58:21.528Z', name: 'ail', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-02-04T10:58:30.648Z', name: 'mozzarella', quantity: '100', category: 'Frais', subCategory: 'fromage',
    },
    {
      id: '2022-02-04T10:58:39.912Z', name: 'pecorino', quantity: '30', category: 'Frais', subCategory: 'fromage',
    },
    {
      id: '2022-02-04T10:58:53.232Z', name: 'pousses épinards', quantity: '50', category: 'Fruits et légumes', subCategory: 'légume',
    },
    {
      id: '2022-02-04T10:59:01.560Z', name: 'purée de tomates', quantity: '200', category: 'Epicerie', subCategory: 'sauces',
    },
  ],
};

const recipe9 = {
  name: 'tofu caramel',
  ingredients: [
    {
      id: '2022-02-13T08:32:24.305Z', name: 'carotte', quantity: '1', category: 'Fruits et légumes', subCategory: 'légume',
    }, {
      id: '2022-02-13T08:32:45.469Z', name: 'champignon', quantity: '100', category: 'Fruits et légumes', subCategory: 'légume',
    }, {
      id: '2022-02-13T08:33:08.383Z', name: 'chou-rave', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'légume',
    }, {
      id: '2022-02-13T08:33:25.567Z', name: 'ail', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'légume',
    }, {
      id: '2022-02-13T08:33:52.987Z', name: 'riz rouge', quantity: '150', category: 'Epicerie', subCategory: 'féculent',
    }, {
      id: '2022-02-13T08:35:05.651Z', name: 'tofu', quantity: '200', category: 'Epicerie', subCategory: 'bio',
    },
  ],
};

const recipe10 = {
  name: 'burger curry',
  ingredients: [
    {
      id: '2022-02-13T09:01:29.772Z', name: 'fromage blanc', quantity: '50', category: 'Frais', subCategory: 'fromage',
    }, {
      id: '2022-02-13T09:01:51.994Z', name: 'oignons', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'légume',
    }, {
      id: '2022-02-13T09:02:07.813Z', name: 'pain à burger', quantity: '2', category: 'Epicerie', subCategory: 'féculent',
    }, {
      id: '2022-02-13T09:02:30.924Z', name: 'pomme de terre', quantity: '3', category: 'Fruits et légumes', subCategory: 'légume',
    }, {
      id: '2022-02-13T09:02:51.884Z', name: 'curry rouge', quantity: '25', category: 'Epicerie', subCategory: 'épice',
    }, {
      id: '2022-02-13T09:03:14.390Z', name: 'steack haché', quantity: '2', category: 'Frais', subCategory: 'viande',
    },
  ],
};

const recipe11 = {
  name: 'ramen curry vert',
  ingredients: [
    {
      id: '2022-02-13T09:03:39.180Z', name: 'cacahuètes grillées', quantity: '25', category: 'Epicerie', subCategory: 'asiatique',
    }, {
      id: '2022-02-13T09:03:56.962Z', name: 'champignon', quantity: '100', category: 'Fruits et légumes', subCategory: 'légume',
    }, {
      id: '2022-02-13T09:04:16.265Z', name: 'lait de coco', quantity: '150', category: 'Epicerie', subCategory: 'asiatique',
    }, {
      id: '2022-02-13T09:04:39.880Z', name: 'nouilles ramen', quantity: '150', category: 'Epicerie', subCategory: 'féculent',
    }, {
      id: '2022-02-13T09:04:56.334Z', name: 'oignons', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'légume',
    }, {
      id: '2022-02-13T09:05:11.033Z', name: 'poivron jaune', quantity: '1', category: 'Fruits et légumes', subCategory: 'légume',
    }, {
      id: '2022-02-13T09:05:27.394Z', name: 'curry vert', quantity: '25', category: 'Epicerie', subCategory: 'épice',
    },
  ],
};

const recipe12 = {
  name: '',
  ingredients: [
    {
      id: '2022-02-13T09:05:43.529Z', name: 'cheddar', quantity: '60', category: 'Frais', subCategory: 'fromage',
    }, {
      id: '2022-02-13T09:06:04.484Z', name: 'échalotte', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'légume',
    }, {
      id: '2022-02-13T09:06:29.349Z', name: 'fromage blanc', quantity: '50', category: 'Frais', subCategory: 'fromage',
    }, {
      id: '2022-02-13T09:06:43.626Z', name: 'pain panini', quantity: '2', category: 'Epicerie', subCategory: 'féculent',
    }, {
      id: '2022-02-13T09:06:59.281Z', name: 'pomme de terre', quantity: '3', category: 'Fruits et légumes', subCategory: 'légume',
    }, {
      id: '2022-02-13T09:07:14.275Z', name: 'steack haché', quantity: '2', category: 'Frais', subCategory: 'viande',
    },
  ],
};

const recipe13 = {
  name: 'crottin de chèvre',
  ingredients: [{
    id: '2022-02-13T09:11:07.244Z', name: 'crottin de chèvre', quantity: '2', category: 'Frais', subCategory: 'fromage',
  }, {
    id: '2022-02-13T09:11:30.660Z', name: 'pomme de terre', quantity: '3', category: 'Fruits et légumes', subCategory: 'légume',
  }, {
    id: '2022-02-13T09:11:41.173Z', name: 'pomme', quantity: '1', category: 'Fruits et légumes', subCategory: 'fruit',
  }, {
    id: '2022-02-13T09:11:54.896Z', name: 'pousse épinard', quantity: '50', category: 'Fruits et légumes', subCategory: 'légume',
  }],
};

const recipe15 = {
  name: 'bruschette',
  ingredients: [{
    id: '2022-02-13T09:13:03.789Z', name: 'avocat', quantity: '1', category: 'Fruits et légumes', subCategory: 'légume',
  }, {
    id: '2022-02-13T09:13:16.903Z', name: 'burrata', quantity: '1', category: 'Frais', subCategory: 'fromage',
  }, {
    id: '2022-02-13T09:13:25.985Z', name: 'ail', quantity: '0.5', category: 'Fruits et légumes', subCategory: 'légume',
  }, {
    id: '2022-02-13T09:13:49.178Z', name: 'noisettes décortiquées', quantity: '20', category: 'Fruits et légumes', subCategory: 'fruit',
  }, {
    id: '2022-02-13T09:14:04.852Z', name: 'petits pains', quantity: '2', category: 'Epicerie', subCategory: 'féculent',
  }, {
    id: '2022-02-13T09:14:15.961Z', name: 'pomme', quantity: '1', category: 'Fruits et légumes', subCategory: 'fruit',
  }, {
    id: '2022-02-13T09:14:33.876Z', name: 'pousse épinard', quantity: '50', category: 'Fruits et légumes', subCategory: 'légume',
  }],
};

const recipe16 = {
  name: 'boeuf aux oignons',
  ingredients: [ { "id": "2022-03-12T13:40:40.821Z", "name": "émincé de boeuf ", "quantity": "300", "category": "Frais", "subCategory": "viande" }, { "id": "2022-03-12T13:40:59.946Z", "name": "oignon jaune", "quantity": "2", "category": "Fruits et légumes", "subCategory": "légume" }, { "id": "2022-03-12T13:41:15.949Z", "name": "gingembre", "quantity": "3", "category": "Fruits et légumes", "subCategory": "légume" }, { "id": "2022-03-12T13:41:28.205Z", "name": "oignon nouveau", "quantity": "0.5", "category": "Fruits et légumes", "subCategory": "légume" }, { "id": "2022-03-12T13:41:39.985Z", "name": "riz", "quantity": "150", "category": "Epicerie", "subCategory": "féculent" }, { "id": "2022-03-12T13:41:57.754Z", "name": "sauce soja", "quantity": "40", "category": "Epicerie", "subCategory": "sauces" } ],
};

const recipe17 = {
  name: 'dahl de lentilles corail',
  ingredients: [ { "id": "2022-03-12T13:43:12.885Z", "name": "citron vert", "quantity": "1", "category": "Fruits et légumes", "subCategory": "fruit" }, { "id": "2022-03-12T13:43:28.817Z", "name": "coriandre", "quantity": "0.5", "category": "Fruits et légumes", "subCategory": "herbe" }, { "id": "2022-03-12T13:43:41.909Z", "name": "curry madras", "quantity": "0.5", "category": "Epicerie", "subCategory": "épice" }, { "id": "2022-03-12T13:43:55.613Z", "name": "gingembre", "quantity": "3", "category": "Fruits et légumes", "subCategory": "légume" }, { "id": "2022-03-12T13:44:14.201Z", "name": "lait de coco", "quantity": "150", "category": "Epicerie", "subCategory": "asiatique" }, { "id": "2022-03-12T13:44:27.080Z", "name": "lentilles corail", "quantity": "150", "category": "Epicerie", "subCategory": "féculent" }, { "id": "2022-03-12T13:44:37.766Z", "name": "oignon jaune", "quantity": "0.5", "category": "Fruits et légumes", "subCategory": "légume" }, { "id": "2022-03-12T13:44:46.750Z", "name": "panais", "quantity": "1", "category": "Fruits et légumes", "subCategory": "légume" }, { "id": "2022-03-12T13:44:56.454Z", "name": "patate douce", "quantity": "1", "category": "Fruits et légumes", "subCategory": "légume" }, { "id": "2022-03-12T13:45:09.349Z", "name": "épinard branche", "quantity": "100", "category": "Fruits et légumes", "subCategory": "légume" } ],
};

const recipe18 = {
  name: 'saumon grillé curry',
  ingredients: [ { "id": "2022-03-12T13:46:30.149Z", "name": "curry moulu", "quantity": "0.5", "category": "Epicerie", "subCategory": "épice" }, { "id": "2022-03-12T13:46:42.501Z", "name": "oignon nouveau", "quantity": "0.5", "category": "Fruits et légumes", "subCategory": "légume" }, { "id": "2022-03-12T13:46:55.245Z", "name": "fromage blanc", "quantity": "100", "category": "Frais", "subCategory": "fromage" }, { "id": "2022-03-12T13:47:09.693Z", "name": "pavé de saumon", "quantity": "240", "category": "Frais", "subCategory": "poisson" }, { "id": "2022-03-12T13:47:31.397Z", "name": "pomme de terre purée", "quantity": "3", "category": "Fruits et légumes", "subCategory": "légume" } ],
};

const oldRecipes = [
  recipe1, recipe2, recipe3, recipe4, recipe5, recipe6, recipe7, recipe8, recipe9, recipe11, recipe12, recipe13, recipe15,
];

console.log(oldRecipes);

const recipes = [
  recipe1, recipe7, recipe8, recipe9, recipe10, recipe16, recipe17, recipe18
];

export default recipes;
