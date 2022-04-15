import { gql } from "apollo-angular";

export const GET_EXPENSES_QUERY = gql`
    query Query {
        expenses {
            _id
            cost
            date
            name
        }
    }
`;
