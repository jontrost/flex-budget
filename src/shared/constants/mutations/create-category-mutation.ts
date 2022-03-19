import { gql } from "apollo-angular";

export const CREATE_CATEGORY_MUTATION = gql`
    mutation CreateCategory($name: String!) {
        createCategory(name: $name) {
            name
        }
    }
`;
