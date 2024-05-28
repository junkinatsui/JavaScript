class KaraokeMachine
    def initialize(melody)
      @melody = melody
    end
  
    MELODIES = %w[C C# D D# E F F# G G# A A# B].freeze
  
    def transpose(number)
      @melody.split('').map { |code|
        code.match?(/\w/) ? adjust_melody_line(code, number) : code
      }.join('')
    end
  
    def adjust_melody_line(code, number)
      MELODIES[new_index(code, number)]
    end
  
    def new_index(code, number)
      original_index = MELODIES.index(code)
      (original_index + number).modulo(MELODIES.size)
    end
  end