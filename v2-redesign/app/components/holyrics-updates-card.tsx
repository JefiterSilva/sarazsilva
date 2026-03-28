import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, Star } from "lucide-react"

export default function HolyricsUpdatesCard() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 shadow-lg">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-bold text-purple-800 mb-2">
            🎉 Novas Aulas Adicionadas!
          </CardTitle>
          <p className="text-gray-600">
            Conteúdo exclusivo recém-adicionado aos cursos Holyrics
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Holyrics Parte 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md border border-purple-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-600 text-white p-2 rounded-lg">
                <PlayCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-800">
                  Holyrics Parte 1
                </h3>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  2 Novas Aulas
                </Badge>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <Star className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-purple-800">
                    Aula 7 - Telas públicas e retorno no preview
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Aprenda a configurar telas públicas e visualizar o retorno no preview
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <Star className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-purple-800">
                    Aula 8 - Configuração no painel de configuração
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Domine as configurações avançadas do painel de controle
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Holyrics Parte 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <PlayCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800">
                  Holyrics Parte 2
                </h3>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  2 Novas Aulas
                </Badge>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <Star className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-800">
                    Aula 7 - Atualização para fundos com letras personalizadas
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Crie fundos únicos com letras personalizadas para suas apresentações
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <Star className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-800">
                    Aula 8 - Criando contagem regressiva com próxima apresentação
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Configure contagens regressivas dinâmicas para suas apresentações
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center pt-4">
            <p className="text-gray-600 mb-4">
              Acesse agora mesmo o conteúdo atualizado e aproveite as novas funcionalidades!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Acessar Holyrics Parte 1
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Acessar Holyrics Parte 2
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}