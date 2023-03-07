package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Movies {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String releasedate;
    private String genre;
    private String price;
    @Override
    public String toString() {
        return "Movies [id=" + id + ", title=" + title + ", releasedate=" + releasedate + ", genre=" + genre
                + ", price=" + price + "]";
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getReleasedate() {
        return releasedate;
    }
    public void setReleasedate(String releasedate) {
        this.releasedate = releasedate;
    }
    public String getGenre() {
        return genre;
    }
    public void setGenre(String genre) {
        this.genre = genre;
    }
    public String getPrice() {
        return price;
    }
    public void setPrice(String price) {
        this.price = price;
    }
    
}
