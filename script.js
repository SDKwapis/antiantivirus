const myFiles = ["spotifysetup.exe", "virus.exe", "dog.jpg"];
const myFiles2 = ["totallynotpron.mov", "antivirus.exe", "superhotmalware.exe"];

function removeVirus(file) {
  for (i = 0; i <= file.length; i++) {
    let virusFree = [];
    console.log(file[i]);
    if (file[i].includes("virus")) {
      console.log("Virus Found");
    } else {
      virusFree.push(file[i]);
      console.log(virusFree);
    }
  }
}

removeVirus(myFiles);
