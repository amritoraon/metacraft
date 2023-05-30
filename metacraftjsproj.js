/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nftArray=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_symbol,_cost,_bling) {
const nftObj={
   "Name":_name,
   "Symbol":_symbol,
   "Cost":_cost,
   "Bling":_bling,
}
nftArray.push(nftObj);
console.log("Minted NFT Name :"+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(var i=0;i<nftArray.length;i++){
   console.log("\n");
   console.log("NFT ID :"+(i+1));
   console.log("NFT Name: "+nftArray[i].Name);
   console.log("NFT Symbol: "+nftArray[i].Symbol);
   console.log("NFT COST: "+nftArray[i].Cost);
   console.log("NFT Bling: "+nftArray[i].Bling);
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("Number of NFT: "+nftArray.length);
}

// call your functions below this line
mintNFT("abc","!",1,"Silver");
mintNFT("def","@",1,"Gold");
mintNFT("xyz","#",1,"Bronz");
console.log("\n");
getTotalSupply();
console.log("\n");
listNFTs();