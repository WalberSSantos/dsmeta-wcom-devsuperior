package com.wscomservice.dsmeta.entities;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tb_sales")
public class Sale {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private LocalDate date;
	private String sellerName;
	private Integer visited;
	private Integer deals;
	private Double amount;	

	public Sale() {
		
	}


	public Sale(Long id, LocalDate date, String sellerName, Integer visited, Integer deals, Double amount) {
		this.id = id;
		this.date = date;
		this.sellerName = sellerName;
		this.visited = visited;
		this.deals = deals;
		this.amount = amount;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public LocalDate getDate() {
		return date;
	}


	public void setDate(LocalDate date) {
		this.date = date;
	}


	public String getSellerName() {
		return sellerName;
	}


	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}


	public Integer getVisited() {
		return visited;
	}


	public void setVisited(Integer visited) {
		this.visited = visited;
	}


	public Integer getDeals() {
		return deals;
	}


	public void setDeals(Integer deals) {
		this.deals = deals;
	}


	public Double getAmount() {
		return amount;
	}


	public void setAmount(Double amount) {
		this.amount = amount;
	}


	@Override
	public int hashCode() {
		return Objects.hash(id, sellerName);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Sale other = (Sale) obj;
		return Objects.equals(id, other.id) && Objects.equals(sellerName, other.sellerName);
	}


	@Override
	public String toString() {
		return "Sale [id=" + id + ", date=" + date + ", sellerName=" + sellerName + ", visited=" + visited + ", deals="
				+ deals + ", amount=" + amount + "]";
	}
	
}


