import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './FormDetails.css'

const FormDetails = () => {
  const [message, setMessage] = useState(false)
  const {id} = useParams();
  const [formData, setFormData] = useState(
    {
      article: "", color: "", material: "", sole: "",
      size6: 0, size7: 2, size8: 3, size9: 3, size10: 2
    })


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const invalidData = !formData.article || !formData.color || !formData.material || !formData.sole ||
    (formData.size6 || formData.size7 || formData.size8 || formData.size9 || formData.size10) <= 0


  const handleSubmit = (e) => {
    e.preventDefault();
    if (invalidData) {
      setMessage(true)
    }
    else {
      console.log(formData)
    }

  }


  return (
    <div className='form-details-conaiter home-container'>
      <div className="form-details-wrapper">
        <div className="form-id-details">
          Form id : {id}
        </div>
        
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <div className="field-label-input-wrapper">
              <div className="form-field-number">
                fieldNo: 103010
              </div>
              <div className="label-input-wrapper">
                <div className="label-wrapper">Article</div>
                <div className="input-wrapper">
                  <input
                    type="text"
                    aria-label='article'
                    placeholder='article'
                    name='article'
                    onChange={handleChange}
                    value={formData.article}
                  />
                </div>
              </div>
              {(message && !formData.article) ?
                <div className="alert-message">
                  Article can not be blank
                </div>
                : ''
              }
            </div>
            <div className="field-label-input-wrapper">
              <div className="form-field-number">
                fieldNo: 103020
              </div>
              <div className="label-input-wrapper">
                <div className="label-wrapper">Color</div>
                <div className="input-wrapper">
                  <input
                    type="text"
                    aria-label='color'
                    placeholder='color'
                    onChange={handleChange}
                    name="color"
                    value={formData.color}
                  />
                </div>
              </div>
              {(message && !formData.color) ?
                <div className="alert-message">
                  Color can not be blank
                </div>
                : ''
              }
            </div>
            <div className="field-label-input-wrapper">
              <div className="form-field-number">
                fieldNo: 103030
              </div>
              <div className="label-input-wrapper">
                <div className="label-wrapper">Material</div>
                <div className="input-wrapper">
                  <input
                    type="text"
                    aria-label='material'
                    placeholder='material'
                    onChange={handleChange}
                    name='material'
                    value={formData.material}


                  />
                </div>
              </div>
              {(message && !formData.material) ?
                <div className="alert-message">
                  Material can not be blank
                </div>
                : ''
              }
            </div>
            <div className="field-label-input-wrapper">
              <div className="form-field-number">
                fieldNo: 103040
              </div>
              <div className="label-input-wrapper">
                <div className="label-wrapper">Sole</div>
                <div className="input-wrapper">
                  <input
                    type="text"
                    aria-label='sole'
                    placeholder='sole'
                    onChange={handleChange}
                    value={formData.sole}
                    name='sole'

                  />
                </div>
              </div>
              {(message && !formData.sole) ?
                <div className="alert-message">
                  Sole can not be blank
                </div>
                : ''
              }
            </div>
            <div className="field-label-input-wrapper">
              <div className="form-field-number">
                fieldNo: 104006
              </div>
              <div className="label-input-wrapper">
                <div className="label-wrapper">Size 6</div>
                <div className="input-wrapper">
                  <input
                    type="number"
                    aria-label='size 6'
                    placeholder='size 6'
                    onChange={handleChange}
                    value={formData.size6}
                    name='size6'
                    min={0}
                    max={50}

                  />
                </div>
              </div>
              {(message && !formData.size6) ?
                <div className="alert-message">
                  Size can not be blank
                </div>
                : ''
              }
            </div>
            <div className="field-label-input-wrapper">
              <div className="form-field-number">
                fieldNo: 104007
              </div>
              <div className="label-input-wrapper">
                <div className="label-wrapper">Size 7</div>
                <div className="input-wrapper">
                  <input
                    type="number"
                    aria-label='size 7'
                    placeholder='size 7'
                    onChange={handleChange}
                    value={formData.size7}
                    name='size7'
                    min={0}
                    max={50}

                  />
                </div>
              </div>
              {(message && !formData.size7) ?
                <div className="alert-message">
                  Size can not be blank
                </div>
                : ''
              }
            </div>
            <div className="field-label-input-wrapper">
              <div className="form-field-number">
                fieldNo: 104008
              </div>
              <div className="label-input-wrapper">
                <div className="label-wrapper">Size 8</div>
                <div className="input-wrapper">
                  <input
                    type="number"
                    aria-label='size 8'
                    placeholder='size 8'
                    onChange={handleChange}
                    value={formData.size8}
                    name='size8'
                    min={0}
                    max={50}

                  />
                </div>
              </div>
              {(message && !formData.size8) ?
                <div className="alert-message">
                  Size can not be blank
                </div>
                : ''
              }
            </div>
            <div className="field-label-input-wrapper">
              <div className="form-field-number">
                fieldNo: 104009
              </div>
              <div className="label-input-wrapper">
                <div className="label-wrapper">Size 9</div>
                <div className="input-wrapper">
                  <input
                    type="number"
                    aria-label='size 9'
                    placeholder='size 9'
                    onChange={handleChange}
                    value={formData.size9}
                    name='size9'
                    min={0}
                    max={50}

                  />
                </div>
              </div>
              {(message && !formData.size9) ?
                <div className="alert-message">
                  Size can not be blank
                </div>
                : ''
              }
            </div>
            <div className="field-label-input-wrapper">
              <div className="form-field-number">
                fieldNo: 104010
              </div>
              <div className="label-input-wrapper">
                <div className="label-wrapper">Size 10</div>
                <div className="input-wrapper">
                  <input
                    type="number"
                    aria-label='size 10'
                    placeholder='size 10'
                    onChange={handleChange}
                    value={formData.size10}
                    name='size10'
                    min={0}
                    max={50}
                  />
                </div>
              </div>
              {(message && !formData.size10) ?
                <div className="alert-message">
                  Size can not be blank
                </div>
                : ''
              }
            </div>
            <div className="submit-btn-wrapper">
              <button
                type='submit'
                title="submit button"
                className='submit-btn'
              >Submit
              </button>
            </div>
          </form>

        
      </div>
    </div>
  )
}

export default FormDetails