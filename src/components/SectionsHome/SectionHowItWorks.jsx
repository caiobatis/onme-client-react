import React, { Component } from 'react'
import { Link } from "react-router-dom"
import ProductCard from '../Cards/ProductCard'

export default class SectionHowItWorks extends Component {
  render() {
    return (
      <section className='howItWorks'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="defaultTitle">
                <h2 className="h2">Produtos e Serviços</h2>
                <p className="p">Aqui você encontra a solução financeira  para suas viagens internacionais seja ela a lazer, estudos ou negócios.</p>
                <span className="span">Ficou com dúvidas? <Link to="/contato">Entre em contato</Link></span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="cards">
                  <div className="col-md-3">
                    <ProductCard
                      title="Papel Moeda"
                      description="Comprar &lt;b&gt;Dólar, Euro, Libra ou outras moedas estrangeiras&lt;/b&gt; ficou ainda mais fácil, conte com as melhores taxas do mercado e uma equipe especializada para atender a necessidade de cada cliente"
                      path="/papel-moeda"
                      titleButton="Saiba mais"
                      brand="Frente Corretora"
                    />
                  </div>
                  <div className="col-md-3">
                    <ProductCard
                      title="Remessa internacional"
                      img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6WWtrfqUFups2e-z74zhdClFWQaBZzWlv8Ys6KlXyL34JaDPsHQ'}
                      description="&lt;b&gt;Envie, receba ou pague&lt;/b&gt; de onde quiser para qualquer lugar do mundo de forma rápida e segura, aqui você encontra especialistas com anos de mercado para lhe indicar a melhor opção"
                      path="/remessa"
                      titleButton="Saiba mais"
                      brand="Frente Corretora"
                    />
                  </div>
                  <div className="col-md-3">
                    <ProductCard
                      title="Cartão pré-pago"
                      img={'https://www.travelmoneyoz.com/sites/v1.travelmoneyoz.com/files/TMOZ-640x320-1.jpg'}
                      description="Praticidade, segurança e agilidade. O cartão pré-pago é recarregável em diversas moedas. A maneira mais moderna de gerenciar seu dinheiro em viagens ao exterior. "
                      path="/papel-moeda#cartao"
                      brand="Onme Câmbio"
                      titleButton="Saiba mais"/>
                  </div>
                  <div className="col-md-3">
                    <ProductCard
                      title="Seguro Viagem"
                      img={'https://www.relocatemagazine.com/media/images/international-assignment-demand-for-travel-security-advice-grows-800-per-cent-_13692_t12.jpg'}
                      description="Viaje tranquilo e protegido, com o nosso Seguro viagem você poderá viajar pelo mundo sem se preocupar com imprevistos e, assim, aproveitar ao máximo cada momento. Com diversas opções de coberturas e assistências diferenciadas para atender a necessidade de cada cliente. "
                      path="/"
                      brand="Sul America"
                      titleButton="Comprar agora!"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
