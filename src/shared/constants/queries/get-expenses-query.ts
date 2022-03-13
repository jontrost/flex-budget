import { gql } from "apollo-angular";

export const GET_EXPENSES_QUERY = gql`
    {
        expenses {
            cost
            date
            name
        }
    }
`;
