exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    schema.buildObjectType(
      {
        name: "listProductModels",
        fields: {
          id: "ID!",
          productName: "String!",
          productCode: "String",
        },
        interfaces: ["Node"],
      },
      {
        name: "listCategoriesModels",
        fields: {
          id: "ID!",
          categoriesName: "String!",
        },
        interfaces: ["Node"],
      }
    ),
  ];
  createTypes(typeDefs);
};
