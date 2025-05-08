import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Pressable, Button, ScrollView } from 'react-native';

const App = () => {

  const [number, setNumber] = useState(1);

  const changenumber = () => {
    if (number < 5) {
      setNumber(number + 1);
    } else {
      setNumber(1);
    }
  };

  return (
//
    <View>
  
  {number === 1?<Pressable onPress={() => changenumber()}>
        
        <Text
      
          style={
              // Argument -- Inside of a Style Tag
            number === 1
              ? styles.paragraph
              : number === 2
              ? styles.paragraphred
              : styles.paragraphgreen
              
          }>
        This is my first interest. this is {number}
        </Text>
      </Pressable>:null}

      {number === 2?<Pressable onPress={() => changenumber()}>
        
      <Text
      
          style={
              // Argument -- Inside of a Style Tag
            number === 1
              ? styles.paragraph
              : number === 2
              ? styles.paragraphred
              : styles.paragraphgreen
          }>
        This is my second interest. this is {number}
        </Text>
      </Pressable>:null}

      {number === 3?<Pressable onPress={() => changenumber()}>
        
      <Text
      
          style={
              // Argument -- Inside of a Style Tag
            number === 1
              ? styles.paragraph
              : number === 2
              ? styles.paragraphred
              : styles.paragraphgreen
          }>
        This is my third interest. this is {number}
        </Text>
      </Pressable>:null}

      {number === 4?<Pressable onPress={() => changenumber()}>
        
      <Text
      
          style={
              // Argument -- Inside of a Style Tag
            number === 1
              ? styles.paragraph
              : number === 2
              ? styles.paragraphred
              : styles.paragraphgreen
          }>
        This is my fourth interest. this is {number}
        </Text>
      </Pressable>:null}

      {number === 5?<Pressable onPress={() => changenumber()}>
        
      <Text
      
          style={
              // Argument -- Inside of a Style Tag
            number === 1
              ? styles.paragraph
              : number === 2
              ? styles.paragraphred
              : styles.paragraphgreen
          }>
        This is my fifth interest. this is {number}
        </Text>
      </Pressable>:null}

 <ScrollView>
 {number === 1?<View style={styles.container}>
      <Text style={styles.paragraph}>
        One of my interests is that I enjoy reading!
      </Text>
        <Image
          source={{ uri: 'https://www.publishcentral.com.au/wp-content/uploads/2023/05/book-pile-of-must-read-books-scaled1.jpeg' }}
          style={{ width: 300, height: 300 }}

          
        />
    </View>:null}
    {number === 2?<View style={styles.container2}>
    <Text style={styles.paragraph}>
        My second interest is I really enjoy playing video games.
      </Text>

      <Image
          source={{ uri: 'https://i.pinimg.com/736x/aa/44/3b/aa443b034495f447ff2d7797a18b79f2.jpg' }}
          style={{ width: 300, height: 300 }}

          
        />
    </View>:null}
    {number === 3?<View style={styles.container3}>
      <Text style={styles.paragraph}>
        My third interest is I really enjoy writing.
      </Text>

      <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpA6cDUhGC4Ng_CTs2n0cuVjxpSVkTg3y_g&s' }}
          style={{ width: 300, height: 300 }}

          
        />
        
    </View>:null}


    {number === 4?<View style={styles.container4}>
      <Text style={styles.paragraph}>
      My second interest is I enjoy drawing in my free time.
      </Text>
      <Image
          source={{ uri: 'https://bingedrawing.com/wp-content/uploads/2022/09/portrait-study-1024x733.png.webp' }}
          style={{ width: 300, height: 300 }}

          
        />
    </View>:null}

    {number === 5?<View style={styles.container5}>
      <Text style={styles.paragraph}>
        One of my other interests is that I really enjoy listening to music!
      </Text>
        <Image
          source={{ uri: 'https://static.vecteezy.com/system/resources/previews/028/269/275/non_2x/happy-cute-girl-listening-to-music-music-therapy-concept-illustration-vector.jpg' }}
          style={{ width: 300, height: 300 }}

          
        />
    </View>:null}
    </ScrollView>
    </View>
  );
};

// Output (like HTML) ends here

//need to export the Component.
export default App;

//Styling -- Like CSS starts here.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0ece2',
    padding: 48,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#444444',
    padding: 48,
  },

  container3: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8f64b1',
    padding: 48,
  },

  container4: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#abcdef',
    padding: 48,
  },

  container5: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f9cb9c',
    padding: 48,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraphred: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  paragraphgreen: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
  },

  paragraph2: {
    margin: 14,
    fontSize: 58,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
});