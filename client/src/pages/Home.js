import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_BOOKS, {
    fetchPolicy: "no-cache"
  });
// look at activity 13
