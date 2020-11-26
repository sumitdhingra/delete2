echo Enter your player name
read playername
while [[ ! $playername =~ ^[a-zA-Z-]+$ ]];do
    echo "Please enter only alphabets or - in playername"
    read playername
done
npm install -g yo generator-item-player
yo item-player $playername
