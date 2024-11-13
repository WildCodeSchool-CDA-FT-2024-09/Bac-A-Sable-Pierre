"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const repos_json_1 = __importDefault(require("../src/data/repos.json"));
const langs_json_1 = __importDefault(require("../src/data/langs.json"));
const status_json_1 = __importDefault(require("../src/data/status.json"));
const raw_json_1 = __importDefault(require("../src/data/raw.json"));
const typeDefs = `#graphql
  type Language {
    size: Int
    name: String
  }

  type Raws {
    id: String
    isPrivate: Boolean
    languages: [Language]
    name: String
    url: String
  }

  type Repos {
    id: String
    name: String
    url: String
    isFavorite: Boolean
  }

  type Langs {
    id: String
    label: String
  }

  type Status {
    id: String
    label: String
  }

  type Query {
    repos: [Repos]
    langs: [Langs]
    status: [Status]
    raws: [Raws]
  }
`;
const resolvers = {
    Query: {
        repos: () => repos_json_1.default,
        langs: () => langs_json_1.default,
        status: () => status_json_1.default,
        raws: () => raw_json_1.default.map((raw) => (Object.assign(Object.assign({}, raw), { languages: raw.languages.map((lang) => ({
                size: lang.size,
                name: lang.node.name,
            })) }))),
    },
};
const server = new server_1.ApolloServer({ typeDefs, resolvers });
(async () => {
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
})();
//# sourceMappingURL=index.js.map