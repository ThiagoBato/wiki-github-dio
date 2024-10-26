import { useState } from 'react';

import { Input } from '../../components/Input';
import { ItemRepo } from '../../components/ItemRepo';
import { Button } from '../../components/Button';
import { api } from '../../services/api';

import { HomeContainer, GithubImg, Container, SearchContainer } from './styles';
import githublogo from '../../assets/img/github-logo.png';

const Home = () => {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleInputChange = (event) => {
    setCurrentRepo(event.target.value);
  };

  const handleBtnSearch = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      
      const repoExists = repos.some(repo => repo.id === data.id);

      if (repoExists) {
        setCurrentRepo('Já procurado!');
        return;
      }

      if (data.id) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
      }
    } catch {
      setCurrentRepo('Não existe');
    }
  };

  
  const handleBtnRemove = (id) => {
    const updatedRepos = repos.filter(repo => repo.id !== id);
    setRepos(updatedRepos);
  };

  return (
    <HomeContainer>
      <Container>
        <GithubImg src={githublogo} alt="Github logo" />
        <SearchContainer>
          <Input value={currentRepo} onChange={handleInputChange} />
          <Button label={'Buscar'} onClick={handleBtnSearch} />
        </SearchContainer>

        {repos.map(repo => (
          <ItemRepo
            name={repo.name}
            fullname={repo.full_name}
            url={repo.html_url}
            key={repo.id}
            onClick={() => handleBtnRemove(repo.id)}
          />
        ))}
      </Container>
    </HomeContainer>
  );
};

export default Home;
