import React, { useState } from "react";
import * as S from './styles';
import Cards from "../Cards";
import { Button } from "@chakra-ui/react";

export default function News({News}) {

    const compareByDate = (a, b) => {
        const dateA = new Date(a.publishedAt);
        const dateB = new Date(b.publishedAt);
      
        return dateB - dateA;
      };

      const newsSortedByDate = News.sort(compareByDate);

      const [visibleItems, setVisibleItems] = useState(4);

      const handleClick = () => {     
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
      };
    return (
        <>
           <S.Container>
            {newsSortedByDate.slice(0 , visibleItems).map((item) => (
            <Cards 
                author={item.author}
                content={item.content == null ? '' : item.content}
                description={item.description == null ? '' : item.description}
                published={item.publishedAt}
                source={item.source.name}
                title={item.title}
                url={item.url}
                urlImg={item.urlToImage == null ? 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' : item.urlToImage}
            /> 
            ))}
             
           </S.Container>

           {visibleItems < newsSortedByDate.length && (
              <div style={{padding: '10px' , width: '100%' , display: 'flex' , alignItems: 'center' , justifyContent: 'center'}}>
                  <Button 
                  background={"purple"} 
                  width={'68%'} 
                  height={'55px'}
                  fontSize={'18px'}
                  color={"#FFF"} 
                  _hover={{background: '#3f1337'}}
                  onClick={handleClick}>Ver Mais</Button>
              </div>
              
            )}
        </>
    )
}