import { useContext,useState,useEffect  } from "react";

import AppContext from "../../context/AppContext";

const ModalVariantes = ({isOpen,closeModal,value}) => {
    const appContext = useContext(AppContext);
    
    const [productVariable, setData] = useState(value);

    useEffect(() => {
            setData(value)
            console.log('RENDER')
            console.log(value)
        },[]);

    function handleChange(e) {

    }
    
    function saveProduct(e,item)
    {
        productVariable.variants.forEach((variante)=>
        {
            variante.types.forEach((type)=>{
                if(type.id===item.id)
                {  
                    type.default=e.target.checked
                    console.log(type.default)
                }
            })
        })
       
    }

    function saveProductSingle(item)
    {
        productVariable.variants.forEach((variante)=>
        {
            variante.types.forEach((type)=>{
                if(type.id===item.id)
                {  
                    type.default=true
                }
                if(type.id!==item.id)
                {
                    type.default=false
                }
            })
        })
        console.log(productVariable)
    }

    const { cart } = appContext;
    if(!value.variants)
    {
        return(null)
    }
    return(
        
    <div className={ isOpen ? '': 'd-none' } >
        <div className="mfp-bg my-mfp-zoom-in mfp-ready"></div>
        <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready" tabIndex="-1" style={{overflow:"hidden auto"}} ><div className="mfp-container mfp-inline-holder">
            <div className="mfp-content">
                <div id="modal-dialog" className="zoom-anim-dialog">
                    <div className="small-dialog-header">
                        <h3> {value.name} </h3>
                    </div>
                    <div className="content">
                        <h5>Quantity</h5>
                        <div className="numbers-row">
                        {cart.items
                            ? cart.items.forEach((item) => {
                                if (item.quantity > 0) {
                                    if(item.id===value.id)
                                    {
                                return( 
                                    <p type="text"  id="qty_1" className="qty2 form-control" name="quantity"
                                    style={{
                                        position: 'relative',
                                        width: '40px',
                                        height: '40px',
                                        textAlign: 'center',
                                        left: '50%',
                                        padding: '5px',
                                        border: 'none',
                                        marginLeft: '-20px',
                                        fontWeight: '500',
                                        background: 'none',
                                        fontSize: '1.125rem'}}>
                                        {item.quantity}
                                    </p>
                                    )}}
                                }):
                                <p type="text"  id="qty_1" className="qty2 form-control" name="quantity"
                                style={{
                                    position: 'relative',
                                    width: '40px',
                                    height: '40px',
                                    textAlign: 'center',
                                    left: '50%',
                                    padding: '5px',
                                    border: 'none',
                                    marginLeft: '-20px',
                                    fontWeight: '500',
                                    background: 'none',
                                    fontSize: '1.125rem'}}>
                                    0
                                </p>
                            }

                           
                        <div className="inc button_inc" onClick={() => appContext.addItem(productVariable)} style={{ top:'-4px' }} >+</div>
                        {cart.items
                            ? cart.items.forEach((item) => {
                                if (item.quantity > 0) 
                                {
                                    if(item.id===value.id)
                                    {
                                        return(
                                            <div className="dec button_inc" onClick={() => appContext.removeItem(productVariable)}>-</div>
                                        )
                                    }
                                }
                                }):null}
                        </div>
                        {
                        value.variants.map((variante) => 
                        <div key={"variant"+variante.id}>
                            <h5>{variante.name}</h5>
                            {
                                variante.type === 'MULTI_SELECT' &&
                                <ul className="clearfix">
                                {variante.types.map((type) => 
                                <li key={type.id}>
                                    <label className="container_check" >{type.name}<span>+ ${type.price} </span>
                                        {
                                            type.defaultValue ? 
                                            <input name={variante.name} type="checkbox" onClick={ (e)=> {handleChange(e) ; saveProduct(e,type)}} />
                                            : 
                                            <input name={variante.name} type="checkbox" onClick={ (e)=> {handleChange(e) ; saveProduct(e,type)}} defaultChecked/>
                                        }
                                           <span className="checkmark"></span>
                                    </label>
                                </li>
                                )}
                            </ul>
                            }
                            {
                                variante.type === 'SINGLE_SELECT' &&
                                
                                <ul className="clearfix">
                                {variante.types.map((type) => 
                                    <li>
                                        <label className="container_radio">{type.name}<span>+ ${type.price}</span>
                                        
                                            <input type="radio" defaultValue={type.id} name={variante.name} onClick={ (e)=> {handleChange(e) ; saveProductSingle(type)}} />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                )}
                                </ul>
                            }
                        </div>
                        ) }
                    </div>
                    <div className="footer">
                        <div className="row small-gutters">
                            <div className="col-md-4">
                                <button type="reset" className="btn_1 outline full-width mb-mobile"  onClick={ () => closeModal()} >Cancel</button>
                            </div>
                            <div className="col-md-8">
                                <button type="reset" className="btn_1 full-width"  onClick={() => appContext.addItem(value)} >Add to cart</button>
                            </div>
                        </div>
                        {/*<!-- /Row -->*/}
                    </div>
                    <button title="Close (Esc)" type="button" className="mfp-close" onClick={ () => closeModal()}></button>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}
export default ModalVariantes
