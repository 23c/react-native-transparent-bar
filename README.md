# React Native Navigator Transparent Bar

A transparent NavigatorBar for React Native.

## Getting started
1. `npm install react-native-transparent-bar@latest --save`

## Usage
1. `var NavigatorTransparentBar = require('react-native-transparent-bar');`
2. `<NavigatorTransparentBar>Some tags</NavigatorTransparentBar>`
```javascript
//javascript
<NavigatorTransparentBar>                                                   
  <TextInput                                                                
  placeholder="React Native 引领未来"                                  
  clearTextOnFocus={true}                                              
  style={[styles.searchBar]}                                           
  defaultValue=''                                                      
  placeholderTextColor="gray"                                          
  >                                                                         
  </TextInput>                                                              
  <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={{position:'absolute',left:(width/16),top:20,}} onPress={this._leftClick}>
    <View style={{height:30,width:30,}}>                                     
      <Icon                                                                   
      name='fontawesome|qrcode'                                            
      title={'消息中心'}                                                   
      size={20}                                                            
      color='#FFFFFF'                                                      
      style={{width:21,height:18}}                                         
      />                                                                     
      <Text style={styles.header}>{'扫啊扫'}</Text>                          
    </View>                                                                   
  </TouchableHighlight>                                                     
  <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={{position:'absolute',right:(width/16),top:20,}} onPress={this._rightClick}>
    <View style={{height:30,width:30,}}>                                     
      <Icon                                                                  
      name='fontawesome|commenting-o'                                     
      title={'消息中心'}                                                  
      size={20}                                                           
      color='#FFFFFF'                                                     
      style={{width:21,height:18}}                                        
      />                                                                    
      <Text style={styles.header}>{'消息中心'}</Text>                    
    </View>                                                               
  </TouchableHighlight>                                                  
</NavigatorTransparentBar>
```
