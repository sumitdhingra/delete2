echo Enter your player name
read playername
while [[ ! $playername =~ ^[a-zA-Z-]+$ ]];do
    echo "Please enter only alphabets or - in player name"
    read playername
done
npm install -g yo generator-item-player
yo item-player $playername
echo Enter Bitbucket Username
read username
echo Enter Bitbucket password
read password
cd libs-$playername-item-player
curl -X POST -v -u $username:$password "https://api.bitbucket.org/2.0/repositories/comprodls/libs-$playername-item-player" -H "Content-Type: application/json"  -d '{"has_wiki": false, "is_private": true, "project": {"key": "ASP"}}'
git remote add origin https://$username@bitbucket.org/comprodls/libs-$playername-item-player.git
git push -u origin develop