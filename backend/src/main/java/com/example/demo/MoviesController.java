package com.example.demo;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
public class MoviesController {
    private final MoviesRepository repository;

    public MoviesController(MoviesRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/movies")
    public Iterable<Movies> all() {
        return repository.findAll();
    }

    @PostMapping("/movies")
    @ResponseStatus(HttpStatus.CREATED)
    public Movies create(@RequestBody Movies movie) {
        return repository.save(movie);
    }   

    @GetMapping("/movies/{id}")
    public Optional<Movies> get(@PathVariable Long id) {
        return repository.findById(id);
    }

    @PutMapping("/movies/{id}")
    public Movies update(@RequestBody Movies newMovie, @PathVariable Long id) {
        return repository.findById(id)
            .map(movie -> {
                movie.setTitle(newMovie.getTitle());
                movie.setReleasedate(newMovie.getReleasedate());
                movie.setGenre(newMovie.getGenre());
                movie.setPrice(newMovie.getPrice());
                return repository.save(movie);
            })
            .orElseGet(() -> {
                newMovie.setId(id);
                return repository.save(newMovie);
            });
    }

    @DeleteMapping("/movies/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }   

    
}
