import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import { useNavigate } from 'react-router-native';
import {useState} from "react";
import { useDebounce } from 'use-debounce';

const RepositoryList = () => {
    const [filter, setFilter] = useState('');
    const [sortBy, setSortBy] = useState('CREATED_AT');
    const [debouncedFilter] = useDebounce(filter, 500);
    const { repositories, fetchMore } = useRepositories(sortBy, debouncedFilter);
    const navigate = useNavigate();

    return <RepositoryListContainer repositories={repositories}
                                    navigate={navigate}
                                    fetchMore={fetchMore}
                                    filter={filter}
                                    setFilter={setFilter}
                                    sortBy={sortBy}
                                    setSortBy={setSortBy}
    />;
};

export default RepositoryList;