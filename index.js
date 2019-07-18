/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

let question = 'Que mas deseas saber acerca de la cerveza? ';

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const data = require('./data/main.json');
    const template = require('./templates/main.json');
    const speechText = 'Bienvenido a tipos de cerveza, aquí podrás encontrar información sobre la cerveza, que deseas saber?';
    
    if (!supportsAPL(handlerInput)) {
        return handlerInput.responseBuilder
          .speak(speechText)
            .reprompt(speechText)
            .withShouldEndSession(false)
            .getResponse();
     
    }

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
          .addDirective({
              type:'Alexa.Presentation.APL.RenderDocument',
              version: '1.0',
              document: template,
              dataSource: data
          })
          .withShouldEndSession(false)
      .getResponse();
  },
};

// const WelcomeIntentHandler = {
//   canHandle(handlerInput) {
//     return handlerInput.requestEnvelope.request.type === 'IntentRequest'
//       && handlerInput.requestEnvelope.request.intent.name === 'WelcomeIntent';
//   },
//   handle(handlerInput) {
//     let name = handlerInput.requestEnvelope.request.intent.slots.name.value;
    
//     const speechText = `Hey ${name}, good to meet you.`;
//     return handlerInput.responseBuilder
//       .speak(speechText)
//       .getResponse();
//   },
// };

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const data = require('./data/help.json');
    const template = require('./templates/help.json');
    const speechText = 'Solicitaste ayuda, Puedes preguntarme acerca de los tipos de cerveza, su origen o inclusive que es una cerveza, que deseas saber?';


    if (!supportsAPL(handlerInput)) {
        return handlerInput.responseBuilder
            .speak(speechText)
            .withShouldEndSession(false)
            .getResponse();
     
        }

    return handlerInput.responseBuilder
      .speak(speechText)
      .addDirective({
              type:'Alexa.Presentation.APL.RenderDocument',
              version: '1.0',
              document: template,
              dataSource: data
            })
        .withShouldEndSession(false)
      .getResponse();
  },
};

const AboutBeerIntentHandler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AboutBeerIntent' ;
    },
    handle(handlerInput) {
        const data = require('./data/about.json');
        const template = require('./templates/about.json');
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'la cerveza es una bebida alcohólica elaborada a partir de azúcares obtenidas de cereales y otros granos (principalmente cebada y trigo), saborizada y aromatizada con lúpulo (entre otras hierbas y aditivos), que luego son fermentados en agua con levaduras/';

        if (!supportsAPL(handlerInput)) {
            return responseBuilder
            .speak(say + question)
            .withShouldEndSession(false)
            .getResponse();
     
        }

        return responseBuilder
            .speak(say + question)
            .reprompt('try again, ' + say)
            .addDirective({
              type:'Alexa.Presentation.APL.RenderDocument',
              version: '1.0',
              document: template,
              dataSource: data
            })
            .withShouldEndSession(false)
            .getResponse();
    },
};

// https://www.thebeertimes.com/que-es-la-cerveza-y-como-se-elabora/
// https://maridaje.emol.com/9284/sabes-tomar-cerveza-aqui-siete-tips-no-perderte-nada-cuando-pruebes-una/

const DidNotUnderstandIntentHandler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'DidNotUnderstandIntent' ;
    },
    handle(handlerInput) {
        const data = require('./data/didnot.json');
        const template = require('./templates/didnot.json');
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

         let say = 'Disculpa no entendi lo que me quieres decir. ';

        if (!supportsAPL(handlerInput)) {
            return responseBuilder
            .speak(say + question)
            .withShouldEndSession(false)
            .getResponse();
     
        }

        return responseBuilder
            .speak(say + question)
            .reprompt(say)
            .addDirective({
              type:'Alexa.Presentation.APL.RenderDocument',
              version: '1.0',
              document: template,
              dataSource: data
            })
            .withShouldEndSession(false)
            .getResponse();
    },
};

const HistoryBeerIntentHandler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'HistoryBeerIntent' ;
    },
    handle(handlerInput) {
        const data = require('./data/history.json');
        const template = require('./templates/history.json');
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Ya se bebía en la India hacia el año 3500 a.C., y en China hace cinco mil años, sin embargo, los babilonios quienes crearon la receta más antigua conocida de la cerveza: la de cebada y trigo,Durante la Edad Media fueron las Abadías de Centro Europa las guardianas de la cerveza, mejorando la caliadad de las recetas.Es en el Siglo 20  cuando la cerveza  nace con una vocación global de ser industrializada. ';

        if (!supportsAPL(handlerInput)) {
            return responseBuilder
            .speak(say + question)
            .withShouldEndSession(false)
            .getResponse();
     
        }

        return responseBuilder
            .speak(say + question)
            .reprompt('try again, ' + say)
            .addDirective({
              type:'Alexa.Presentation.APL.RenderDocument',
              version: '1.0',
              document: template,
              dataSource: data
            })
            .withShouldEndSession(false)
            .getResponse();
    },
};

const TypesBeerIntentHandler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'TypesBeerIntent' ;
    },
    handle(handlerInput) {
          const data = require('./data/types.json');
        const template = require('./templates/types.json');
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Existen 2 familias de cerveza: lager y ale, dentro de cada familia existen diferentes tipos, para saber qué tipos de cervezas hay en cada familia, ¿puedes decir que tipos de cervezas hay en la familia lager o que tipos de cervezas hay en la familia ale. ';

        if (!supportsAPL(handlerInput)) {
            return responseBuilder
            .speak(say + question)
            .withShouldEndSession(false)
            .getResponse();
     
        }

        return responseBuilder
            .speak(say + question)
            .reprompt('try again, ' + say)
            .addDirective({
              type:'Alexa.Presentation.APL.RenderDocument',
              version: '1.0',
              document: template,
              dataSource: data
            })
            .withShouldEndSession(false)
            .getResponse();
    },
};

const BeerFamilyIntentHandler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'BeerFamilyIntent' ;
    },
    handle(handlerInput) {
        const data = require('./data/family.json');
        const template = require('./templates/family.json');
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        let slotValues = getSlotValues(request.intent.slots); 
        console.log('familias',slotValues.beerFamily.resolved);
        
        let say = '';

        switch (slotValues.beerFamily.resolved){
            case 'Ale':
                say = 'Son de sabor complejo, poseen una alta graduación alcohólica y entran dentro del grupo de fermentación alta dado que las temperaturas para fermentar van entre los 15 y 25 °C. ';
                break;
            case 'Lager':
                say = 'Son cervezas con levadura de baja fermentación sometidas a un proceso de maduración lento (entre dos y seis meses) a baja temperatura (entre 7 °C y 13 °C). Este tipo de cervezas tienen un menor rango de aromas y sabores, son claras y ligeras y tienen mucho gas. ';
                break;
            default:
                say = 'Disculpa esa familia de cerveza no existe.';
                break;
        }
        
        if (!supportsAPL(handlerInput)) {
            return responseBuilder
            .speak(say + question)
            .withShouldEndSession(false)
            .getResponse();
     
        }

        return responseBuilder
            .speak(say + question)
            .reprompt('try again, ' + say)
            .addDirective({
              type:'Alexa.Presentation.APL.RenderDocument',
              version: '1.0',
              document: template,
              dataSource: data
            })
            .withShouldEndSession(false)
            .getResponse();
    },
};

const BeerTypesIntentHandler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'BeerTypesIntent' ;
    },handle(handlerInput) {
         const data = require('./data/famtype.json');
        const template = require('./templates/famtype.json');
        const request = handlerInput.requestEnvelope.request;
         const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        
        let slotValues = getSlotValues(request.intent.slots); 
        console.log('tipos',slotValues.beerType.resolved);
    
        let say = '';

        switch (slotValues.beerType.resolved){
            case 'Porter':
                say = 'Cerveza oscura, posee un sabor malteado con esencia torada y achocolatada. ';
                break;
            case 'Stout':
                say = 'Cerveza oscura con excelente aroma, alto contenido alcohólico, sabores robustos y malteados. ';
                break;
            case 'Pale Ale':
                say = 'Cerveza rubia de origen inglés, cuerpo acaramelado, con notas de nuez y lúpulos especializados. ';
                break;
            case 'Ipa':
                say = 'Cerveza de color cobrizo con mucho cuerpo, matices afrutados, alto contenido de lúpulos y malta. ';
                break;
            case 'Pilsner':
                say = 'Cerveza de color claro y contenido alcohólico medio, sabor fresco y acabado seco. ';
                break;
            case 'Bock':
                say = 'Cerveza lager de sabor fuerte, de diferentes tonalidades, mucho cuerpo y alta graduación alcohólica. ';
                break;
            default:
                say = 'Disculpa ese tipo de cerveza no existe. ';
                break;
        }
        
        if (!supportsAPL(handlerInput)) {
            return responseBuilder
            .speak(say + question)
            .withShouldEndSession(false)
            .getResponse();
     
        }

        return responseBuilder
            .speak(say + question)
            .reprompt('try again, ' + say)
            .addDirective({
              type:'Alexa.Presentation.APL.RenderDocument',
              version: '1.0',
              document: template,
              dataSource: data
            })
            .withShouldEndSession(false)
            .getResponse();
    },
};

const AdviceIntentHandler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AdviceIntent' ;
    },
    handle(handlerInput) {
        const data = require('./data/advice.json');
        const template = require('./templates/advice.json');
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        let randomAdvice =  0 + Math.floor(Math.random() * (5 - 0 ));
    console.log('random',randomAdvice);
        let advices = [
            'Cada cerveza en su vaso: Nunca debes tomar directo de la botella o la lata, pues te perderás buena parte de los atributos sensoriales de esta bebida. Existen vasos para cada estilo de cerveza, los más conocidos: la copa, el schop y la garza.',
            'El mito de la temperatura: No toda cerveza se debe tomar bien helada. Esto va a depender de su graduación alcohólica, su color y estilo. Mientras más fuerte sea (más alto grado), más temperatura necesitará. Asimismo, las cervezas oscuras necesitan más temperatura que las claras.',
            'Pierde el miedo: Si vas a un local cervecero, no dudes en preguntar y pedir asesoramiento para que tu elección sea la acertada. Generalmente los garzones están preparados para entregar una experiencia artesanal, entendiendo que hay un tipo de cerveza para cada comida, ocasión y persona',
            'Aprende a maridar: Con tanta variedad de comida como de cerveza es difícil saber cuál es la combinación perfecta.',
            'Almacenar de forma apropiada: Las tres palabras claves del lugar donde guardar correctamente una cerveza son fresco, frío y oscuro. Mientras mejores sean las condiciones de almacenamiento, mejor se mantendrá su calidad.'
        ]

        if (!supportsAPL(handlerInput)) {
            return responseBuilder
            .speak(advices[randomAdvice] + question)
            .withShouldEndSession(false)
            .getResponse();
     
        }
        
        return responseBuilder
            .speak(advices[randomAdvice] + question)
            // .reprompt('try again, ' + say)
            .addDirective({
              type:'Alexa.Presentation.APL.RenderDocument',
              version: '1.0',
              document: template,
              dataSource: data
            })
            .withShouldEndSession(false)
            .getResponse();
    },
};


const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    let say = 'Entendido, hablamos más tarde! ';

    return handlerInput.responseBuilder
      .speak(say)
            .withShouldEndSession(true)
            .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Lo siento, a ocurrido un error.')
      .reprompt('Sorry, an error occurred.')
      .getResponse();
  },
};

function supportsAPL(handlerInput) {
  const supportedInterfaces = handlerInput.requestEnvelope.context.System.device.supportedInterfaces;
  const aplInterface = supportedInterfaces['Alexa.Presentation.APL'];
  return aplInterface != null && aplInterface !== undefined;
}

function getSlotValues(filledSlots) { 
    const slotValues = {}; 
 
    Object.keys(filledSlots).forEach((item) => { 
        const name  = filledSlots[item].name; 
 
        if (filledSlots[item] && 
            filledSlots[item].resolutions && 
            filledSlots[item].resolutions.resolutionsPerAuthority[0] && 
            filledSlots[item].resolutions.resolutionsPerAuthority[0].status && 
            filledSlots[item].resolutions.resolutionsPerAuthority[0].status.code) { 
            switch (filledSlots[item].resolutions.resolutionsPerAuthority[0].status.code) { 
                case 'ER_SUCCESS_MATCH': 
                    slotValues[name] = { 
                        heardAs: filledSlots[item].value, 
                        resolved: filledSlots[item].resolutions.resolutionsPerAuthority[0].values[0].value.name, 
                        ERstatus: 'ER_SUCCESS_MATCH' 
                    }; 
                    break; 
                case 'ER_SUCCESS_NO_MATCH': 
                    slotValues[name] = { 
                        heardAs: filledSlots[item].value, 
                        resolved: '', 
                        ERstatus: 'ER_SUCCESS_NO_MATCH' 
                    }; 
                    break; 
                default: 
                    break; 
            } 
        } else { 
            slotValues[name] = { 
                heardAs: filledSlots[item].value || '', // may be null 
                resolved: '', 
                ERstatus: '' 
            }; 
        } 
    }, this); 
 
    return slotValues; 
} 

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    AboutBeerIntentHandler,
    DidNotUnderstandIntentHandler,
    HistoryBeerIntentHandler,
    TypesBeerIntentHandler,
    BeerFamilyIntentHandler,
    BeerTypesIntentHandler,
    AdviceIntentHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
