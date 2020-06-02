# Cordova-android-sms-reader

Cordova-android-sms-reader est un plugin 
permettant la lecture des sms dans des applications cordova sur Android. 


## Installation

Veuillez utiliser l'utilitaire cordova pour installer le plugin dans votre application. 
```bash
# Depuis le répo NPM
cordova plugin add cordova-android-sms-reader
# Directement depuis Git
cordova plugin add https://github.com/J4YF7O/cordova-android-sms-reader.git
```

## Usage

### Chargement du plugin
```javascript
// Chargement du plugin
const casr = cordova.require("cordova-android-sms-reader.smsreader");
// casr correspond à : {permission: Permission, smsreader: SMSReader}
```

### Vérification des permission
Une seule permission est requise par les appareils android pour avoir accès à l'ensemble des sms : `android.permission.READ_SMS`
````javascript
casr.permission.requestPermission().then(() => {
    // L'utilisateur vous donne accès à ses sms
}).catch(() => {
    // L'utilisateur refuse que vous accédiez à ses sms
});
````
Vous pouvez seulement vouloir tester que l'utilisateur possède la permission nécessaire : 
```javascript
casr.permission.assertPermission().then(() => {
    // Vous avez accès aux sms
}).catch(() => {
    // Vous n'avez pas accès aux sms
});
```

### Typage des SMS
```typescript
// SMS Interface
interface SMS {
    id: number;
    address: string;
    body: string;
    read: boolean;
    date: number;
    type: SMSSource;
}
enum SMSSource {
    ALL = "",
    INBOX = "inbox",
    SENT = "sent"
}
```

### Chargement des sms
```javascript
// Lecture de tous les sms
casr.smsreader.read().then((smsResult) => {
    // Un tableau avec l'ensemble des sms est accéssible sur le getter "all" de la class "SMSResult" :
    const tousLesSMS = smsResult
}).catch(() => {
    // Une erreur est servenue
})
// Lecture des sms reçu (inbox)
const tousLesSMSReçus = await casr.smsreader.read(SMSSource.INBOX);
// Lecture des sms envoyé (sent)
const tousLesSMSEnvoyés = await casr.smsreader.read(SMSSource.SENT);
```

### Filtrage des sms
Cette catégorie regroupe les informations sur les filtres
* Les filtres sont "concaténable"

```javascript
tousLesSMS
    .read()
    .withPhoneNumbers("+33606060606")
    .bodiesInclude("recherche")
    .all;
```

#### Récupération des sms déjà lu
```
tousLesSMS.read().all
```
#### Récupération sms lié aux numéros de téléphone en paramètre
```javascript
// Only one phone number
tousLesSMS.withPhoneNumbers("+33606060606").all;
// Multiple phone numbers
tousLesSMS.withPhoneNumbers("+33606060606", "+33707070707").all;
/// From array
const pN = ["+33606060606", "+33707070707"];
tousLesSMS.withPhoneNumbers(...pN).all;
```

#### Rechercher un élément dans le contenu du message
```javascript
// Par défault nous regardons l
tousLesSMS.bodiesInclude("recherche").all;
```

### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

