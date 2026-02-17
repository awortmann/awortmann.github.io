# Dieser Patch bringt die in Ruby 3.2 entfernte Methode File.exists? zurück
class File
  class << self
    alias_method :exists?, :exist?
  end
end