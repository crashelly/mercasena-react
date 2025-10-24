
class Config {
    API: object = {};
    mainUrl: string;
    constructor() {
        // this.mainUrl = ""
        this.mainUrl = "https://zensoftwares.website/mercasena/app/Controllers/",

        this.API = {
            URL: {
                endpoints: {
                    bannerImages: {
                        get: () => this.mainUrl + 'mercasena.php?action=getBannerImages'
                    },
                    products: {
                        getAll: () => this.mainUrl + 'Product.php?action=getInfoProductsForShop',
                        fetchByCategory: (categoryID :number ) => this.mainUrl + 'Product.php?action=getProductsByCategory&categoryId=' + categoryID
                    },
                    categories : {
                        get : () => this.mainUrl + 'Product.php?action=getCategories'
                    },
                    measurements :{
                        get : ()=> this.mainUrl + 'mercasena.php?action=getMeasurementsInfo'
                    } ,
                    whatsapp : {
                        get : () => this.mainUrl + 'mercasena.php?action=getWhatsappNumber'
                    }
                }
            }
        }
    }
} 
    
        
export const CONFIG = new Config()