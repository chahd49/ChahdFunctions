import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Pressable, Button, ScrollView } from 'react-native';

const App = () => {

  const [number, setNumber] = useState(1);

  const changenumber = () => {
    if (number < 3) {
      setNumber(number + 1);
    } else {
      setNumber(1);
    }
  };

  return (
//
    <View>
  
  <Pressable onPress={() => changenumber()}>
        
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
      </Pressable>

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
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
    </View>:null}
    {number === 3?<View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
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
    backgroundColor: 'blue',
    padding: 48,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding: 8,
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